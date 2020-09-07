import React from "react";

import {netWorkService} from "../api";
import { Link, withRouter } from "react-router-dom";

import Catalog_list from "./Catalog_list";
import List from "./List";

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            top: [],
            categories: [],
            items: [],
            more: '',
            search: '',
        }
    };

    componentDidMount() {
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
        return netWorkService({url: `items?g=${this.state.search}`, method: "GET"})
            .then((response) => {
                console.log("ответ", response);
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
         //console.log(this.state.search)
        return (
            <div className={"catalog_page"}>
                <div className={"add"}>
                    <img src="https://github.com/netology-code/ra16-diploma/blob/master/html/img/banner.jpg?raw=true"
                         style={{width:'100%'}}/>
                </div>
                <div style={{textAlign: 'center'}}>
                    <h1>Каталог</h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="input-group mb-3">
                        <input type="text"
                               className="form-control"
                               placeholder="Recipient's username"
                               aria-label="Recipient's username"
                               value={this.state.search}
                               onChange={(event) => this.setState({search: event.target.value})}
                               aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary"
                                    type="button" id="button-addon2">Search
                            </button>
                        </div>
                    </div>
                </div>
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
            </div>
        )
    }
}

export default withRouter(Catalog);
