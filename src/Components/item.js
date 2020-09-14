import React from 'react';
import {netWorkService} from "../api";
import {Link, withRouter} from "react-router-dom";
import {addItems} from "../actions/actionCreators";
import {connect} from "react-redux";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            item: {}
        }
    };

    componentDidMount() {
        this.getItem();
    };

    getItem = () => {
        return netWorkService({url: `items/${this.props.match.params.id}`, method: "GET"})
            .then((response) => {
                console.log("ответ", response);
                this.setState({item: response, loader: true});
            });
    };

    Basket = () => {
        console.log(this.state.item)
        this.props.dispatch(addItems(this.state.item))
        return this.props.history.push(`/cart`)
    }

    render() {
        return (
            <section className="catalog-item">
                <h2 className="text-center">Босоножки 'MYER'</h2>
                <div className="row">
                    <div className="col-5">
                        {/*<img src={this.state.item.images[0]} className="img-fluid" alt=""></img>*/}
                    </div>
                    <div className="col-7">
                        <table className="table table-bordered">
                            <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{this.state?.item.sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{this.state.item.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{this.state.item.color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{this.state.item.material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{this.state.item.season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{this.state.item.reason}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="text-center">
                            <p>Размеры в наличии:{this.state.item.sizes?.map(item=> <span
                                className={`catalog-item-size ${item.avalible ? 'selected' : ""}`}>{item.size} </span>)}
                            </p>
                            <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                                        <button className="btn btn-secondary">-</button>
                                                        <span className="btn btn-outline-primary">1</span>
                                                        <button className="btn btn-secondary">+</button>
                                                    </span>
                            </p>
                        </div>
                        <button className="btn btn-danger btn-block btn-lg" onClick={this.Basket}>В корзину</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect()(withRouter(Item));
