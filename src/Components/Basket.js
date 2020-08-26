import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Basket(props) {
    const item = useSelector((state) => state.basketAdd);
    const dispatch = useDispatch();
    return(
        <div>AboutPage</div>
    )
}
export default Basket;
