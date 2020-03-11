import React, { Component } from "react";
import { connect } from "react-redux";

import { withBookStoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";
import BookListitem from "../book-list-item";
import "./book-list.css";

import Spinner from "../spinner";

class BookList extends Component {

    componentDidMount() {
        const { bookStoreService, booksLoaded} = this.props;

        bookStoreService
            .getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const { books, booksLoading } = this.props;

        if (booksLoading) return <Spinner/>;

        return (
            <div className="row book-list">
                {
                    books.map(book => <BookListitem key={book.id} book={book} />)
                }
            </div>
        );
    }
};

const mapStateToProps = ({ books, booksLoading }) => {
    return { books, booksLoading }
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);