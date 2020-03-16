import React, { Component } from "react";
import { connect } from "react-redux";

import { compose } from "../../utils";
import { withBookStoreService } from "../hoc";
import { fetchBooks, addBookToCart } from "../../actions";
import ErrorIndicator from "../error-indicator";
import BookListitem from "../book-list-item";
import "./book-list.css";

import Spinner from "../spinner";

class BookList extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, booksLoading, error, addBookToCart } = this.props;

        if (booksLoading) return <Spinner />;
        if (error) return <ErrorIndicator />;

        return (
            <div className="row book-list">
                {
                    books.map(book => <BookListitem key={book.id} book={book} onBtnClick={addBookToCart} />)
                }
            </div>
        );
    }
};

const mapStateToProps = ({ books, booksLoading, error }) => {
    return { books, booksLoading, error }
};

const mapDispatchToProps = (dispatch, { bookStoreService }) => {
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        addBookToCart: (id) => dispatch(addBookToCart(id))
    }
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);