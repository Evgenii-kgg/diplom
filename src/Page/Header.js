import React from "react";
import {NavLink} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    const activeStyle = {color: "red"}
    return (
        <div className={'header'} style={{display: 'flex', marginLeft: "2vh"}}>
            <img src="https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/header-logo.png"
                 style={{height: '50px'}}/>
            <nav style={{display: 'flex', alignItems: 'center'}}>
                <NavLink exact activeClassName="active" to="/" activeStyle={activeStyle}
                         style={{textDecoration: "none", marginLeft: "4vh"}}>
                    Главная
                </NavLink>
                <NavLink activeClassName="active" to="/catalog" activeStyle={activeStyle}
                         style={{textDecoration: "none", marginLeft: "4vh"}}>
                    Каталог
                </NavLink>
                <NavLink activeClassName="active" to="/about" activeStyle={activeStyle}
                         style={{textDecoration: "none", marginLeft: "4vh"}}>
                    О магазине
                </NavLink>
                <NavLink activeClassName="active" to="/contacts" activeStyle={activeStyle}
                         style={{textDecoration: "none", marginLeft: "4vh"}}>
                    Контакты
                </NavLink>
            </nav>
            <div className={"search_basket"} style={{display: 'flex', alignItems: 'center', marginRight: "4vh",}}>
                <img src={SearchIcon} style={{height: '20px'}}/>
                <img src={ShoppingCartIcon} style={{height: '20px'}}/>
            </div>
        </div>
    );
}

export default Header;