import React, { Component } from "react";
import { connect } from "react-redux";

import { compose } from "../../utils";
import { withBookStoreService } from "../hoc";

import { fetchBooks } from "../../actions";

import YourOrder from "../your-order";

class CartPage extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        return <YourOrder />
    }
};

const mapDispatchToProps = (dispatch, { bookStoreService }) => {
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch)
    }
};

export default compose(
    withBookStoreService(),
    connect(undefined, mapDispatchToProps)
)(CartPage);
