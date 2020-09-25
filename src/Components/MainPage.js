import React from "react";
import {withRouter} from "react-router-dom";
import Category from "./Category";
import List from "./List";
import {connect} from "react-redux";
import {
    getCatalogTitle, getTop,
    onLoadMore,
    onSelectItem
} from "../redux/actions/actionCreators";
import Loader from 'react-loader-spinner'
import banner from '../img/banner.jpg'

class MainPage extends React.Component {


    componentDidMount() {
        this.getHits();
        this.onSelectItem(false)
        this.getCatalogTitle();
        // this.LoadMore()
    }

    getHits = () => {
        return this.props.getTop()
    };

    getCatalogTitle = () => {
        return this.props.getCatalogTitle()
    };

    onSelectItem = (item) => {
        console.log("push", item)
        return this.props.onSelectItem(item)
    }


    onSelectShoes = (item) => {
        console.log("push", item)
        return this.props.history.push(`/catalog/${item}`)
    }

    LoadMore = () => {
        console.log("more")
        return this.props.onLoadMore(this.props.page + 1, this.props.currentCategory)
    }

    render() {
        console.log(this.props.items)
        console.log(this.props.catalog)
        return (
            <div className={"root_list"}>
                <div className={"add"}>
                    <img src={banner}
                         alt={''}
                         style={{width: '100%'}}>
                    </img>
                </div>
                <div className={"style"} style={{textAlign: 'center'}}>
                    <h1>Хиты продаж</h1>
                </div>
                <div className={"hits"}>
                    {this.props.loaded ? <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={50}
                        width={50}

                    /> : <List
                        onSelectItem={(item) => {
                            this.onSelectShoes(item)
                        }}
                        items={this.props.top}/>}
                </div>
                <div className={'catalog'} style={{textAlign: 'center'}}>
                    <h1>Каталог</h1>
                    <Category
                        onSelectAll={(item) => {
                            this.onSelectItem(item)
                        }}
                        onSelectItem={(item) => {
                            this.onSelectItem(item)
                        }}
                        items={this.props.categories}
                    />
                </div>
                <div className={'catalog-list'}>
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
                {!this.props.lastPage && <div className="text-center">
                    <button className="btn btn-outline-primary" onClick={this.LoadMore}>Загрузить ещё</button>
                </div>}
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    categories: state.app.categories,
    items: state.catalog.data,
    page: state.catalog.page,
    loadedCategory: state.catalog.loaded,
    currentCategory: state.catalog.currentCategory,
    lastPage: state.catalog.lastPage,
    top: state.top.data,
    loaded: state.top.loaded,
}), {onSelectItem, getCatalogTitle, onLoadMore, getTop})(MainPage));
