import React from "react";
import {useSelector, useDispatch, connect} from "react-redux";
import {netWorkService} from "../api";
import {changePhone, changeAddress, addItems} from "../actions/actionCreators";


function Basket(props) {

    const item = useSelector((state) => state.basket);
    const dispatch = useDispatch();

    const Order = () => {
        return netWorkService({url: "categories", method: "POST", body: {
            owner:{phone: props.phone, address:props.address, item:props.items}
            }})
            .then((response) => {
                console.log("ответ", response);
                // this.setState({categories: response, loader: true});
            });
    }

    console.log(props)
    return (
        <div>
            <div>
                <section className="cart">
                    <h2 className="text-center">Корзина</h2>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Название</th>
                            <th scope="col">Размер</th>
                            <th scope="col">Кол-во</th>
                            <th scope="col">Стоимость</th>
                            <th scope="col">Итого</th>
                            <th scope="col">Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.items?.map(item => {
                            return (<tr>
                                <th scope="row">1</th>
                                <td><a href="/products/1.html">Босоножки 'MYER'</a></td>
                                <td>18 US</td>
                                <td>1</td>
                                <td>34 000 руб.</td>
                                <td>34 000 руб.</td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm">Удалить</button>
                                </td>
                            </tr>)
                        })}
                        <tr>
                            <td colSpan="5" className="text-right">Общая стоимость</td>
                            <td>34 000 руб.</td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </div>
            <div>
                <section className="order">
                    <h2 className="text-center">Оформить заказ</h2>
                    <div className="card" style={{maxWidth: "30rem", margin: "0 auto"}}>
                        <form className={"card-body"}>
                            <div className={"form-group"}>
                                <label htmlFor="phone">Телефон</label>
                                <input className={"form-control"} id="phone" placeholder="Ваш телефон"
                                       onChange={event => dispatch(changePhone(event.target.value))} name={"phone"}
                                       value={props.phone}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Адрес доставки</label>
                                <input className="form-control" id="address" placeholder="Адрес доставки"
                                       onChange={event => dispatch(changeAddress(event.target.value))} name={"address"}
                                       value={props.address}></input>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="agreement"></input>
                                <label className="form-check-label" htmlFor="agreement">Согласен с правилами
                                    доставки</label>
                            </div>
                            <button type="submit" className="btn btn-outline-secondary"
                                    onClick={Order}>Оформить
                            </button>
                        </form>

                    </div>
                </section>
            </div>

        </div>
    )
}

export default connect(state => ({
    items: state.basket.items,
    phone: state.basket.phone,
    address: state.basket.address
}))(Basket);
