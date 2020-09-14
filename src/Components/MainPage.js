import React from "react";
import {NavLink, withRouter} from "react-router-dom";

import {netWorkService} from "../api";
import ListHits from "./ListHits";
import Catalog_list from "./Catalog_list";
import Button from "@material-ui/core/Button";
import List from "./List";



class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            top: [],
            categories: [],
            items: [],
            more: '',
        }
    }

    componentDidMount() {
        this.getHits();
        this.getCatalog();
        this.getCatalogTitle();
    }

    getHits = () => {
        return netWorkService({url: "top-sales", method: "GET"})
            .then((response) => {
                console.log("ответ", response);
                this.setState({loader: true});
                this.setState({top: response});
            });
    };

    getCatalogTitle = () => {
        return netWorkService({url: "categories", method: "GET"})
            .then((response) => {
                console.log("ответ", response);
                this.setState({loader: true});
                this.setState({categories: response});
            });
    };
    getCatalog = () => {
        return netWorkService({url: "items", method: "GET"})
            .then((response) => {
                console.log("ответ", response);
                this.setState({loader: true});
                this.setState({items: response});
            });
    };

    onSelectItem = (item) => {
        console.log("push", item)
    }
    onSelectShoes = (item) => {
         console.log("push", item)
        return this.props.history.push(`/catalog/${item}`)
    }

    LoadMore = () => {
        return netWorkService({url: "items?offset=6", method: "GET"})
            .then((response)=> {
                console.log("еще", response)

            })
        console.log("more")
    }

    render() {
        return (
            <div className={"root_list"}>
                <div className={"add"}>
                    <img src="https://github.com/netology-code/ra16-diploma/blob/master/html/img/banner.jpg?raw=true"
                         style={{width: '100%'}}/>
                </div>
                <div className={"style"} style={{textAlign: 'center'}}>
                    <h1>Хиты продаж</h1>
                </div>
                <div className={"hits"}>
                    <List
                        onSelectItem={(item) => {
                            this.onSelectShoes(item)
                        }}
                        items={this.state.top}/>
                </div>
                <div className={'catalog'} style={{textAlign: 'center'}}>
                    <h1>Каталог</h1>
                    <Catalog_list
                        onSelectItem={(item) => {
                            this.onSelectItem(item)
                        }}
                        items={this.state.categories}
                    />
                </div>
                <div className={'catalog-list'}>
                    <List
                        className="row"
                        onSelectItem={(item) => {
                            this.onSelectShoes(item)
                        }}
                        items={this.state.items}
                    />
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-primary" onClick={this.LoadMore}>Загрузить ещё</button>
                </div>
            </div>
        )
    }
}

export default withRouter(MainPage);
