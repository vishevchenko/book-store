import React from "react";
import { connect } from "react-redux";

import {
    addBookToCart, removeAllBooksFromCart,
    removeBookFromCart
} from "../../actions";

const OrderListItem = (props) => {
    const { id, title, count, total } = props.cartItem;
    const { addBookToCart, removeAllBooksFromCart,
        removeBookFromCart, i } = props;

    return (
        <tr>
            <th scope="row">{i}</th>
            <td>{title}</td>
            <td>{count}</td>
            <td>${(total / count).toFixed(2)}</td>
            <td>${(total).toFixed(2)}</td>
            <td>
                <button onClick={() => { removeBookFromCart(id); }}><i className="fa fa-minus-circle"></i></button>
                <button onClick={() => { addBookToCart(id) }}><i className="fa fa-plus-circle"></i></button>
                <button onClick={() => { removeAllBooksFromCart(id) }}><i className="fa fa-trash"></i></button>
            </td>
        </tr>
    );
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {
    addBookToCart,
    removeBookFromCart,
    removeAllBooksFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderListItem);