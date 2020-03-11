import React, { Component } from "react";
import { connect } from "react-redux";

import { bookReceived } from "./../../../actions";
import { withBookStoreService } from "../../hoc";
import { compose } from "../../../utils";

import BookDetails from "../../book-details";

class BookDetailsPage extends Component {

    componentDidMount() {

        const { id: bookId } = this.props.match.params;
        const { bookReceived } = this.props;

        this.props.bookStoreService
            .getBookById(bookId * 1)
            .then(data => {
                bookReceived(data);
            });
    }

    render() {
        return <BookDetails />
    }
}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = {
    bookReceived
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookDetailsPage);