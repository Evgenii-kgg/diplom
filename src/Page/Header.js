import React from "react";
import header_logo from '../img/header-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {withRouter} from "react-router-dom";
import {changeSearch, changeSearchGlobal, onSearch, changeSearchOpen} from "../redux/actionCreators/actionCreators";
import {connect} from "react-redux";
import storage from '../service/storage'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOpen: false,
        }
    };

    activeStyle = {color: "red"}

    Search = () => {
        console.log(this.props.searchOpen)
        if (this.props.searchOpen) {
            this.props.onSearch(this.props.search)
            return this.props.history.push(`/catalog`)
        }
        this.props.changeSearchOpen()
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
                                    {this.props.searchOpen && <form data-id="search-form"
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
                                    <div onClick={() => this.props.history.push(`/cart`)}>
                                        <ShoppingCartIcon/>
                                        <span
                                            className={'header-controls-cart-full'}>{storage.get("basket")?.items?.length || ''}</span>
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
    search: state.search.search,
    searchOpen: state.search.searchOpen
}), {changeSearchGlobal, changeSearch, onSearch, changeSearchOpen})(Header));
