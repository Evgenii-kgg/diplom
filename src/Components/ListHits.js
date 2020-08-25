import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function ListHits(props) {
    console.log(props)
    const items = props.items

    return (
        <div className={"hits-list"} style={{columnCount: 3, display: 'flex'}}>
            {items.map((item)=> (
                <Card className={"classes.root"} style={{ margin: '5px', width:'100%'}} key={item.id}>
                    <CardActionArea>
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
                    <CardActions>
                        <Button variant="contained"
                                color="primary"
                                 // onClick={}
                        >
                            Заказать
                        </Button>
                    </CardActions>
                </Card>
                ))}
        </div>

    )
}
export default ListHits;
