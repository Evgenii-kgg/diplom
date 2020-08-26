import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {netWorkService} from "../api";

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

    createData(name, item) {
        return {name, item};
    }

    render() {
        console.log(this.state.item.images);

        const rows = [
            this.createData('Артикул', `${this.state?.item.sku}`),
            this.createData('Производитель', `${this.state.item.manufacturer}`),
            this.createData('Цвет', `${this.state.item.color}`),
            this.createData('Материалы', `${this.state.item.material}`),
            this.createData('Сезон', `${this.state.item.season}`),
            this.createData('Повод', `${this.state.item.reason}`)
        ]

        return (
            <div className={"Item"}>
                <h1>{this.state.item.title}</h1>
                <div>
                    {/*<img src={this.state.item.images[0]}/>*/}
                </div>
                <div className={"table"}>
                    <TableContainer component={Paper}>
                        <Table className={'classes.table'}
                               aria-label="simple table"
                               style={{width: '300px', height: '300px',}}>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.item}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div>
                    <p>Размеры в наличае: {this.state.item.size}</p>
                </div>
                <div className={'button'}>
                    <p>Количество </p>
                </div>
                <div>
                    <button type="button" className="btn btn-danger">В корзину</button>
                </div>

            </div>
        )
    }
}

export default Item;
