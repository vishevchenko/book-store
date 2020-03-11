import React from "react";
import { connect } from "react-redux";

import Spinner from "../spinner";
import NotFound from "../pages/404";

import "./book-details.css";
import { addToCart, cartUpdated } from "../../actions";

const BookDetails = ({ book, addToCart, cartUpdated, bookLoading, bookNotFound }) => {
    if (bookLoading) return <Spinner />;

    if (bookNotFound) return <NotFound />;

    const {
        title, description,
        coverImg, price, author } = book;

    return (
        <div className="row book-details">
            <div className="col">
                <img src={coverImg} alt={title} />
            </div>
            <div className="col">
                <h2 className="title">{title}</h2>
                <p className="author">by {author}</p>
                <p className="description">{description}</p>
                <button className="btn btn-primary pull-right align-bottom"
                    onClick={() => { addToCart(book); cartUpdated() }}>Add To Cart (${price})</button>
            </div>
        </div>
    );
};

const mapStateToProps = ({ book, bookLoading, bookNotFound }) => {
    return {
        book,
        bookLoading,
        bookNotFound
    };
};

const mapDispatchToProps = {
    addToCart,
    cartUpdated
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);