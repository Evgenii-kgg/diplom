import React from "react";
import {
    useParams,
} from "react-router-dom";
import {netWorkService} from "../api";

class Item extends React.Component{
    // let { id } = useParams();

    getCatalog = () => {
        return netWorkService({url: `items${this.props.match.params.id}`, method: "GET"})
            .then((response) => {
                console.log("ответ", response);
                this.setState({loader: true});
                this.setState({items: response});
            });
    };

    render() {
        console.log(this.props);
        return(
            <div>
                <h2>{this.props.match.params.id}</h2>
            </div>
        )
    }
}
export default Item;
