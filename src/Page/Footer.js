import React from "react";
import { NavLink } from "react-router-dom";


function Footer() {
    return (
        <div>
            <div className={"Info"}>
            <NavLink exact activeClassName="active" to="/">
                О магазине
            </NavLink>
            <NavLink exact activeClassName="active" to="/catalog">
                Каталог
            </NavLink>
            <NavLink exact activeClassName="active" to="/contacts">
                Контакты
            </NavLink>
        </div>
            <div className="col">

                    <h5>Принимаем к оплате:</h5>
                    <div className="footer-pay">
                        <div className="footer-pay-systems footer-pay-systems-paypal"></div>
                        <div className="footer-pay-systems footer-pay-systems-master-card"></div>
                        <div className="footer-pay-systems footer-pay-systems-visa"></div>
                        <div className="footer-pay-systems footer-pay-systems-yandex"></div>
                        <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
                        <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
                    </div>

            </div>
            <div className="col text-right">
                    <h5>Контакты:</h5>
                    <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
                    <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
                    <a className="footer-contacts-email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
                    <div className="footer-social-links">
                        <div className="footer-social-link footer-social-link-twitter"></div>
                        <div className="footer-social-link footer-social-link-vk"></div>
                    </div>
            </div>
        </div>
    );
}

export default Footer;