import React from 'react';
import {netWorkService} from "../api";
import {withRouter} from "react-router-dom";
import {addItems} from "../redux/actions/actionCreators";
import {connect} from "react-redux";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            item: {},
            count: 1,
            size: '',
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

    increment = () => {
        this.setState({ count: this.state.count + 1})
    };

    decrement = () =>  {
        this.setState({ count: this.state.count - 1})
    };

    Basket = (item) => {
        console.log(this.state.item)
        this.props.dispatch(addItems({...this.state.item, count: this.state.count, size: this.state.size}))
        return this.props.history.push(`/cart`)
    }

    render() {
        return (
            <section className="catalog-item">
                <h2 className="text-center">{this.state?.item.title}</h2>
                <div className="row">
                    <div className="col-5">
                        {/*{this.state.item.images.find(item => item[0])}*/}
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
                            <p>Размеры в наличии:{this.state.item.sizes?.map((item, key) => {
                                return (<span
                                    key={key}
                                    onClick={()=> {
                                        console.log('size', item.size)
                                        this.setState({size: item.size})
                                    }}
                                    style={{backgroundColor: this.state.size == item.size ?  'grey' : 'transparent', padding: '4px', borderRadius: '5px', marginRight: '5px'}}

                                    className={`catalog-item-size selected `}>{item.size} </span>
                            )})}
                            </p>
                            <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                                        <button className="btn btn-secondary"
                                                                onClick={this.decrement}>-</button>
                                                        <span className="btn btn-outline-primary">{this.state.count}</span>
                                                        <button className="btn btn-secondary"
                                                                onClick={this.increment}>+</button>
                                                    </span>
                            </p>
                        </div>
                        <button className="btn btn-danger btn-block btn-lg" disabled={!this.state.size} onClick={this.Basket}>В корзину</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(state => ({
    items: state.basket.items,
    size: state.basket.size
}))(withRouter(Item));

