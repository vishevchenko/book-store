import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBookDetails } from "./../../../actions";
import { withBookStoreService } from "../../hoc";
import { compose } from "../../../utils";

import BookDetails from "../../book-details";
import Spinner from "../../spinner";
import NotFound from "../404";

class BookDetailsPage extends Component {

    componentDidMount() {
        const { id: bookId } = this.props.match.params;
        this.props.fetchBook(parseInt(bookId));
    }

    render() {
        const { book, bookLoading, bookNotFound } = this.props;

        if (bookLoading) return <Spinner />

        if (bookNotFound) return <NotFound />

        return <BookDetails book={book} />
    }
}

const mapStateToProps = ({ book, bookLoading, bookNotFound }) => {
    return {
        book,
        bookLoading,
        bookNotFound
    }
};

const mapDispatchToProps = (dispatch, { bookStoreService }) => {
    return {
        fetchBook: fetchBookDetails(bookStoreService, dispatch)
    }
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookDetailsPage);