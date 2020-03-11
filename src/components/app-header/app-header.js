import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import "./app-header.css";

const AppHeader = ({ cart }) => {

    let itemsCount = 0;
    let totalPrice = 0;
    cart.forEach(({ price, count }) => {
        itemsCount += count;
        totalPrice += count * price;
    });

    return (
        <ul className="app-header nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    &nbsp;{itemsCount} items (${totalPrice.toFixed(2)})
                </Link>
            </li>

        </ul>
    )
}

const mapStateToProps = ({ cart }) => {
    return { cart }
};

export default connect(mapStateToProps)(AppHeader);
