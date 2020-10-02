import React from 'react';
import {withRouter} from "react-router-dom";
// import {addItems} from "../actions/actionCreators";
import {connect} from "react-redux";

class List extends React.Component {

    // Basket = (item) => {
    //     this.props.dispatch(addItems(item))
    //     return this.props.history.push('/cart')
    // }

    render() {
        console.log(this.props)
        return (
            <div className={"list"} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                {this.props.items.map((item, key) => (
                    <div className="col-4" key={key}>
                        <div className="card catalog-item-card">
                            <img
                                src={item.images}
                                onClick={() => this.props.onSelectItem(item.id)}
                                className="card-img-top img-fluid" alt="">
                            </img>
                            <div className="card-body">
                                <div onClick={() => this.props.onSelectItem(item.id)}>
                                <p className="card-text">{item.title}</p>
                                <p className="card-text">{item.price} руб.</p>
                                </div>
                                <div className="btn btn-outline-primary"
                                   onClick={() => this.props.onSelectItem(item.id)}>
                                    Заказать
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        )
    }
}

export default connect()(withRouter(List));
