import React from "react";
import header_logo from '../img/header-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {withRouter} from "react-router-dom";
import {changeSearch, changeSearchGlobal, onSearch} from "../actions/actionCreators";
import {connect} from "react-redux";
import storage from '../service/storage'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            top: [],
            categories: [],
            items: [],
            more: '',
            search: '',
            searchOpen: false,
            count: storage.get("basket")?.items?.length || '',
        }
    };

    activeStyle = {color: "red"}

    Search = () => {
        //console.log("search")
        if (this.state.searchOpen) {
            this.props.changeSearchGlobal(this.props.search)
            this.props.onSearch(this.props.search)
            this.props.changeSearch('')
            return (
                this.props.history.push(`/catalog`),
                this.setState({searchOpen: false})
        )
        }
        this.setState({searchOpen: true})
    }


    Basket = () => {
        this.props.changeSearch(this.props.search)
        return this.props.history.push(`/cart`)
    }


    render() {
        return (
            <header className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            <a className="navbar-brand" href="/">
                                <img
                                    alt={''}
                                    src={header_logo}>
                                </img>
                            </a>

                            <div className="collapase navbar-collapse" id="navbarMain">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Главная</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/catalog">Каталог</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about">О магазине</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contacts">Контакты</a>
                                    </li>
                                </ul>
                                <div style={{display: 'flex'}}>
                                    {this.state.searchOpen && <form data-id="search-form"
                                                                    className="header-controls-search-form form-inline ">
                                        <input className="form-control"
                                               placeholder="Поиск"
                                               value={this.props.search}
                                               onChange={(event) => this.props.changeSearch(event.target.value)}>
                                        </input>
                                    </form>}
                                    <div onClick={this.Search}>
                                        <SearchIcon/>
                                    </div>
                                    <div onClick={this.Basket}>
                                        <ShoppingCartIcon/>
                                        <span className={'header-controls-cart-full'}>{this.state.count}</span>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        );
    }
}

export default withRouter(connect(state => ({
    search: state.app.search
}),{changeSearchGlobal,changeSearch, onSearch})(Header));
