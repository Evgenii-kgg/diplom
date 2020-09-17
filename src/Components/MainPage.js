import React from "react";
import {withRouter} from "react-router-dom";
import Category from "./Category";
import List from "./List";
import {connect} from "react-redux";
import {
    getCatalogTitle, getHits,
    onLoadMore,
    onSelectAll,
    onSelectItem
} from "../actions/actionCreators";


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            top: [],
            categories: [],
            items: [],
        }
    }

    componentDidMount() {
        this.getHits();
        this.onSelectAll();
        this.getCatalogTitle();
    }

    getHits = () => {
        return this.props.getHits()
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
        return this.props.onLoadMore(this.props.page)
    }

    render() {
        console.log(this.props.items)
        return (
            <div className={"root_list"}>
                <div className={"add"}>
                    <img src="https://github.com/netology-code/ra16-diploma/blob/master/html/img/banner.jpg?raw=true"
                         alt={''}
                         style={{width: '100%'}}>
                    </img>
                </div>
                <div className={"style"} style={{textAlign: 'center'}}>
                    <h1>Хиты продаж</h1>
                </div>
                <div className={"hits"}>
                    <List
                        onSelectItem={(item) => {
                            this.onSelectShoes(item)
                        }}
                        items={this.props.top}/>
                </div>
                <div className={'catalog'} style={{textAlign: 'center'}}>
                    <h1>Каталог</h1>
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
                <div className={'catalog-list'}>
                    <List
                        className="row"
                        onSelectItem={(item) => {
                            this.onSelectShoes(item)
                        }}
                        items={this.props.items}
                    />
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-primary" onClick={this.LoadMore}>Загрузить ещё</button>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(state=>({
    categories: state.app.categories,
    top: state.app.top,
    items: state.app.items,
    all: state.app.all,
    page: state.app.page,
}), {onSelectItem, onSelectAll, getCatalogTitle, onLoadMore, getHits})(MainPage));
