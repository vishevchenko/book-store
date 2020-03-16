import React from "react";
import "./book-details.css";


const BookDetails = ({ book, onAddToCart }) => {

    const {
        id, title, description,
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
                    onClick={() => { onAddToCart(id); }}>Add To Cart (${price})
                    </button>
            </div>
        </div>
    );
};


export default BookDetails;