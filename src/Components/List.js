import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from "react-router-dom";
import {addItems} from "../actions/actionCreators";
import {connect} from "react-redux";

class List extends React.Component {

    Basket = (item) => {
        this.props.dispatch(addItems(item))
        return this.props.history.push(`/cart`)
    }

    render() {
        console.log(this.props)
        return (
            <div className={"hits-list"} style={{columnCount: 3, display: 'flex'}}>
                {this.props.items.map((item) => (
                    <Card className={"classes.root"}
                          style={{margin: '5px', width: '100%'}}
                          key={item.id}
                          >
                        <CardActionArea
                            onClick={() => this.props.onSelectItem(item.id)}>
                            <CardMedia
                                className={"classes.media"}
                                style={{height: "140px"}}
                                image={item.images}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <Button variant="contained"
                                    color="primary"
                                    onClick={()=> this.Basket(item)}
                            >
                                Заказать
                            </Button>
                    </Card>
                ))}
            </div>

        )
    }
}

export default connect()(withRouter(List));
