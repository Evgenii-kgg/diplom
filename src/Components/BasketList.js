import React from "react";
import "./App.css";

function BasketList(props) {

    const itemList = props.items

    return (
        <div className="item-list" >
            {itemList.map((item) => (
                <div className="item" key={item.id}>
                    <p className="item-data" >{item.title}</p>
                    <p className="item-way">{item.sizes} </p>
                    <p className="item-way">{item.price} </p>
                    <p className="item-way">{item.sizes} </p>
                    <p className="item-way">{item.sizes} </p>
                    <button onClick={()=> props.action({actionType:'delete', data:item})}>Удалить</button>
                </div>
            ))}
        </div>
    )
}
export default BasketList;
