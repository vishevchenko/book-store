const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    };
};
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};
const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
};


const bookRequested = () => {
    return {
        type: 'FETCH_BOOK_REQUEST'
    };
};
const bookLoaded = (book) => {
    return {
        type: 'FETCH_BOOK_SUCCESS',
        payload: book
    };
};
const bookError = (error) => {
    return {
        type: 'FETCH_BOOK_ERROR',
        payload: error
    };
};


const cartUpdated = () => {
    return { type: 'CART_UPDATED' };
};

const addBookToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    };
};

const removeBookFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    };
};

const removeAllBooksFromCart = (bookId) => {
    return {
        type: 'REMOVE_ALL_BOOKS_FROM_CART',
        payload: bookId
    };
};


const fetchBooks = (bookStoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookStoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
};

const fetchBookDetails = (bookStoreService, dispatch) => (bookId) => {
    dispatch(bookRequested());
    bookStoreService
        .getBookById(bookId)
        .then((data) => dispatch(bookLoaded(data)))
        .catch((err) => dispatch(bookError(err)));
};


export {
    fetchBooks,
    
    fetchBookDetails,
      
    addBookToCart,
    removeBookFromCart,
    removeAllBooksFromCart,
    
    cartUpdated
};