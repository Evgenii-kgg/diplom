import React from "react";
import {NavLink} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import header_logo from '../img/header-logo.png'

function Header() {
    const activeStyle = {color: "red"}
    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <a className="navbar-brand" href="/">
                            <img src={header_logo} ></img>
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
                            <div>
                                <div className="header-controls-pics">
                                    <div data-id="search-expander"
                                         className="header-controls-pic header-controls-search"></div>
                                    <div className="header-controls-pic header-controls-cart">
                                        <div className="header-controls-cart-full"></div>
                                        <div className="header-controls-cart-menu"></div>
                                    </div>
                                </div>
                                <form data-id="search-form"
                                      className="header-controls-search-form form-inline invisible">
                                    <input className="form-control" placeholder="Поиск"></input>
                                </form>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </header>

    );
}

export default Header;
