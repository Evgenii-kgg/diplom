import React from "react";

import {netWorkService} from "../api";
import { Link, withRouter } from "react-router-dom";

import Catalog_list from "./Catalog_list";
import List from "./List";
import {changeSearchGlobal} from "../actions/actionCreators";
import {connect} from "react-redux";

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            top: [],
            categories: [],
            items: [],
            more: '',
            search: props.match.params.search || '', // change id
        }
        console.log(props.match)
    };

    componentDidMount() {
        this.getSearch()
        this.getCatalog();
        this.getCatalogTitle();
    };

    getCatalogTitle = () => {
        return netWorkService({url: "categories", method: "GET"})
            .then((response) => {
                console.log("ответ", response);
                this.setState({loader: true, categories: response});
            });
    };
    getCatalog = () => {
        return netWorkService({url: "items ", method: "GET"})
            .then((response) => {
                console.log("ответ", response);
                this.setState({loader: true, items: response});
            });
    };

    getSearch = () => {
        console.log(this.state.search)
        return netWorkService({url: `items?g=${this.state.search}`, method: "GET"})
            .then((response) => {
                console.log("поиск", response);
                this.setState({loader: true, items: response});
            });
    };
    onSelectItem = (item) => {
        console.log("push", item)
    }
    onSelectShoes = (item) => {
        console.log("push", item)
        return this.props.history.push(`/catalog/${item}`)
    }

    render() {
         console.log(this.props.searchGlobal)
        // console.log(this.props.match.params)
        return (
            <div className={"catalog_page"}>
                <div className={"add"}>
                    <img src="https://github.com/netology-code/ra16-diploma/blob/master/html/img/banner.jpg?raw=true"
                         style={{width:'100%'}}/>
                </div>
                <section className="catalog">
                    <h2 className="text-center">Каталог</h2>

                    <form className="catalog-search-form form-inline">
                        <input className="form-control"
                               placeholder="Поиск"
                               value={this.props.searchGlobal}
                               onChange={(event) => this.props.dispatch(changeSearchGlobal(event.target.value))}>
                        </input>
                        <button onClick={this.getSearch}>
                            Search
                        </button>
                    </form>
                <div className={'catalog_list'} style={{textAlign: 'center'}}>
                    <Catalog_list
                        onSelectItem={(item) => {
                            this.onSelectItem(item)
                        }}
                        items={this.state.categories}
                    />
                </div>
                <div className={'list'}>
                    <List
                        onSelectItem={(item) => {
                            this.onSelectShoes(item)
                        }}
                        items={this.state.items}
                    />
                </div>
                </section>
            </div>
        )
    }
}

export default withRouter(connect(state=>({
    searchGlobal: state.app.searchGlobal
}))(Catalog));
