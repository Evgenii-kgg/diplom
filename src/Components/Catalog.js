import React from "react";

import {netWorkService} from "../api";
import {withRouter} from "react-router-dom";

import Category from "./Category";
import List from "./List";
import {
    changeSearchGlobal,
    getCatalogTitle,
    onLoadMore,
    onSearch,
    onSelectAll,
    onSelectItem
} from "../actions/actionCreators";
import {connect} from "react-redux";

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            // top: [],
            // categories: [],
            // items: [],
        }
        console.log(props.match)
    };

    componentDidMount() {
        this.getCatalogTitle();
        this.onSelectAll()
        this.props.onSearch(this.props.searchGlobal)
    };

    getCatalogTitle = () => {
        return this.props.getCatalogTitle()
    };

    onSelectItem = (item) => {
        console.log("push", item)
        return this.props.onSelectItem(item)
    }

    onSelectAll = () => {
        return this.props.onSelectAll()
    };

    onSelectShoes = (item) => {
        console.log("push", item)
        return this.props.history.push(`/catalog/${item}`)
    }

    LoadMore = () => {
        console.log("more")
        return this.props.onLoadMore( this.props.page + 1,  this.props.currentCategory )
    }

    render() {
        console.log(this.props.searchGlobal)
        // console.log(this.props.match.params)
        return (
            <div className={"catalog_page"}>
                <div className={"add"}>
                    <img src="https://github.com/netology-code/ra16-diploma/blob/master/html/img/banner.jpg?raw=true"
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
                                this.onSelectAll()
                            }}
                            onSelectItem={(item) => {
                                this.onSelectItem(item)
                            }}
                            items={this.props.categories}
                        />
                    </div>
                    <div className={'list'}>
                        <List
                            onSelectItem={(item) => {
                                this.onSelectShoes(item)
                            }}
                            items={this.props.items}
                        />
                    </div>
                </section>
                <div className="text-center">
                    <button className="btn btn-outline-primary" onClick={this.LoadMore}>Загрузить ещё</button>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    searchItem: state.app.searchCollection,
    searchGlobal: state.app.searchGlobal,
    categories: state.app.categories,
    items: state.app.items,
    all: state.app.all,
    page: state.app.page,
    offset: state.app.offset,
    currentCategory: state.app.currentCategory
}), {onSearch, changeSearchGlobal, onSelectItem, onSelectAll, getCatalogTitle, onLoadMore})(Catalog));


