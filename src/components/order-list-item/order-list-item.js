import React from "react";
import { connect } from "react-redux";

import { addToCart, removeFromCart, reduceInCart, cartUpdated } from "../../actions";

const OrderListItem = (props) => {
    const { id, title, count, price } = props.cartItem;
    const { 
        addToCart, removeFromCart,
        reduceInCart, cartUpdated, i } = props;

    return (
        <tr>
            <th scope="row">{i}</th>
            <td>{title}</td>
            <td>{count}</td>
            <td>${price.toFixed(2)}</td>
            <td>${(price * count).toFixed(2)}</td>
            <td>
                <button onClick={() => {reduceInCart(id); cartUpdated()}}><i className="fa fa-minus-circle"></i></button>
                <button onClick={() => {addToCart(props.cartItem); cartUpdated()}}><i className="fa fa-plus-circle"></i></button>
                <button onClick={() => {removeFromCart(id); cartUpdated()}}><i className="fa fa-trash"></i></button>
            </td>
        </tr>
    );
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {
    addToCart,
    removeFromCart,
    reduceInCart,
    cartUpdated
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderListItem);