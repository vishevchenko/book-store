const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    };
};

const bookReceived = (book) => {
    return {
        type: 'BOOK_RECEIVED',
        payload: book
    };
};

const cartUpdated = () => {
    return { type: 'CART_UPDATED' };
};

const addToCart = (book) => {
    return {
        type: 'ADD_TO_CART',
        payload: book
    };
};

const reduceInCart = (bookId) => {
    return {
        type: 'REDUCE_IN_CART',
        payload: bookId
    };
};

const removeFromCart = (bookId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: bookId
    };
};

export {
    booksLoaded,
    bookReceived,
    addToCart,
    reduceInCart,
    removeFromCart,
    cartUpdated
};