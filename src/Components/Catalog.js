import React from "react";

import {withRouter} from "react-router-dom";

import Category from "./Category";
import List from "./List";
import {
    changeSearchGlobal,
    getCatalogTitle,
    onLoadMoreCatalog,
    onSearch,
    onSelectItemCatalog
} from "../redux/actions/actionCreators";
import {connect} from "react-redux";
import Loader from 'react-loader-spinner'
import banner from '../img/banner.jpg'


class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
        }
        console.log(props.match)
    };

    componentDidMount() {
        this.getCatalogTitle();
        this.onSelectItem(false)
        this.props.onSearch(this.props.searchGlobal)
    };

    getCatalogTitle = () => {
        return this.props.getCatalogTitle()
    };

    onSelectItem = (item) => {
        console.log("push", item)
        return this.props.onSelectItemCatalog(item)
    }


    onSelectShoes = (item) => {
        console.log("push", item)
        return this.props.history.push(`/catalog/${item}`)
    }

    onLoadMoreCatalog = () => {
        return this.props.onLoadMoreCatalog(this.props.page + 1, this.props.currentCategory)
    }

    render() {
        console.log(this.props)
        // console.log(this.props.match.params)
        return (
            <div className={"catalog_page"}>
                <div className={"add"}>
                    <img src={banner}
                         alt={''}
                         style={{width: '100%'}}/>
                </div>
                <section className="catalog">
                    <h2 className="text-center">Каталог</h2>

                    <form className="catalog-search-form form-inline">
                        <input className="form-control"
                               placeholder="Поиск"
                               value={this.props.searchGlobal}
                               onChange={(event) => this.props.changeSearchGlobal(event.target.value)}>
                        </input>
                        <button onClick={(e) => {
                            e.preventDefault();
                            this.props.onSearch(this.props.searchGlobal)
                        }}>
                            Search
                        </button>
                    </form>
                    <div className={'catalog_list'} style={{textAlign: 'center'}}>
                        <Category
                            onSelectAll={() => {
                                this.onSelectItem()
                            }}
                            onSelectItem={(item) => {
                                this.onSelectItem(item)
                            }}
                            items={this.props.categories}
                        />
                    </div>
                    <div className={'list'}>
                        {this.props.loadedCategory ? <Loader
                            type="Oval"
                            color="#00BFFF"
                            height={50}
                            width={50}

                        /> : <List
                            className="row"
                            onSelectItem={(item) => {
                                this.onSelectShoes(item)
                            }}
                            items={this.props.items}
                        />}
                    </div>
                </section>
                {!this.props.lastPage && <div className="text-center">
                    <button className="btn btn-outline-primary" onClick={this.onLoadMoreCatalog}>Загрузить ещё</button>
                </div>}
            </div>
        )
    }
}


export default withRouter(connect(state => ({
    categories: state.app.categories,
    items: state.search.data,
    page: state.search.page,
    loadedCategory: state.search.loaded,
    lastPage: state.search.lastPage,
    searchGlobal: state.search.searchGlobal,
    currentCategory: state.search.currentCategory,
}), {onSearch, changeSearchGlobal, onSelectItemCatalog, getCatalogTitle, onLoadMoreCatalog})(Catalog));
