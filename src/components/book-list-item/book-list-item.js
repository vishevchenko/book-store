import React from "react";
import { addToCart, cartUpdated } from "../../actions";
import { connect } from "react-redux";

import "./book-list-item.css";

const BookListItem = ({ book, addToCart, cartUpdated }) => {
    const { id, title, author, price, coverImg } = book;

    return (
        <div className="col book-list-item">
            <div className="media position-relative">
                <img className="mr-3" src={coverImg} alt={title} />
                <div className="media-body">
                    <a href={`/book/${id}`}><h5 className="mt-0">{title}</h5></a>
                    <p>by <i>{author}</i></p>
                    <button className="btn btn-primary"
                        onClick={() => { addToCart(book); cartUpdated() }}>Add To Cart <span>(${price})</span></button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {
    addToCart,
    cartUpdated
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListItem);
