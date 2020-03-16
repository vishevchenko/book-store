import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import "./app-header.css";

const AppHeader = ({ itemsCount, totalPrice }) => {

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

const mapStateToProps = ({ itemsCount, totalPrice }) => {
    return {
        itemsCount,
        totalPrice
    };
}

export default connect(mapStateToProps)(AppHeader);
