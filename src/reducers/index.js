
const saveCartToLS = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const restoreCartFromLS = () => {
    const cart = localStorage.getItem('cart');
    return JSON.parse(cart) || [];
}

const initalState = {
    book: null,
    books: [],
    bookLoading: true,
    booksLoading: true,
    bookNotFound: false,
    cart: restoreCartFromLS()
};

const reducer = (state = initalState, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED': {
            return {
                ...state,
                books: action.payload,
                booksLoading: false,
            }
        }

        case 'BOOK_RECEIVED': {
            return {
                ...state,
                book: action.payload,
                bookLoading: false,
                bookNotFound: !action.payload
            }
        }

        case 'ADD_TO_CART': {
            const { payload: book } = action;
            const { id, title, price } = book;
            const { cart } = state;
            const idx = cart.findIndex(item => (book.id === item.id));

            if (-1 === idx) {
                const newItem = {
                    id,
                    title,
                    price,
                    count: 1
                };
                return {
                    ...state,
                    cart: [...cart, newItem]
                };
            }

            const bookInCart = cart[idx];
            const newItem = {
                ...bookInCart,
                count: bookInCart.count + 1
            };

            return {
                ...state,
                cart: [
                    ...cart.slice(0, idx),
                    newItem,
                    ...cart.slice(idx + 1)
                ]
            };
        }

        case 'CART_UPDATED': {
            saveCartToLS(state.cart)
            return state;
        }

        case 'REMOVE_FROM_CART': {
            const { cart } = state;
            const bookId = action.payload;
            const idx = cart.findIndex(book => book.id === bookId);

            return {
                ...state,
                cart: [
                    ...cart.slice(0, idx),
                    ...cart.slice(idx + 1)
                ]
            }
        }

        case 'REDUCE_IN_CART': {
            const { cart } = state;
            const bookId = action.payload;
            const idx = cart.findIndex(book => book.id === bookId);
            const book = cart[idx]

            const newBook = {
                ...book,
                count: book.count - 1
            };

            if (newBook.count <= 0) {
                return {
                    ...state,
                    cart: [
                        ...cart.slice(0, idx),
                        ...cart.slice(idx + 1)
                    ]
                }
            }

            return {
                ...state,
                cart: [
                    ...cart.slice(0, idx),
                    newBook,
                    ...cart.slice(idx + 1)
                ]
            }

        }

        default: return state;
    }
};

export default reducer;