import React from "react";
import { connect } from "react-redux";

import "./order-list.css";
import { cartUpdated } from "../../actions";
import OrderListItem from "../order-list-item";

const OrderList = ({ cart }) => {

    if (cart.length === 0) {
        return <h5>Your Cart Is Emprty</h5>
    }

    let cartTotal = 0;

    cart.forEach(item => cartTotal += (item.price * item.count));

    return (
        <table className="order-list table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Count</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(
                    (cartItem, i) => <OrderListItem i={i + 1} key={cartItem.id} cartItem={cartItem} />
                )}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4">Total</td>
                    <td>${cartTotal.toFixed(2)}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
};

const mapStateToProps = ({ cart }) => {
    return { cart }
};

const mapDispatchToProps = {
    cartUpdated
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
