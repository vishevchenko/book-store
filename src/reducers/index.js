
const saveCartToLS = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const restoreCartFromLS = () => {
    const savedCart = localStorage.getItem('cart');
    const cart = JSON.parse(savedCart) || [];
    let itemsCount = 0;
    let totalPrice = 0;

    cart.forEach(({ count, total }) => {
        itemsCount += count;
        totalPrice += total;
    });

    return {
        cart,
        itemsCount,
        totalPrice
    }
}

const updateCartItem = (book, item = {}, qty) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item;

    return {
        id, title,
        count: count + qty,
        total: total + book.price
    };
}

const updateCartItems = (cart, item, idx) => {
    let itemsCount = 0;
    let totalPrice = 0;
    const newCart = cart.slice();

    if (item.count === 0) {
        newCart.splice(idx, 1);
    } else if (-1 !== idx) {
        newCart.splice(idx, 1, item)
    } else {
        newCart.push(item);
    }

    newCart.forEach(({ count, total }) => {
        itemsCount += count;
        totalPrice += total;
    });

    saveCartToLS(newCart);

    return {
        cart: newCart,
        itemsCount,
        totalPrice
    };
}

const initalState = {
    book: null,
    books: [],
    bookLoading: true,
    booksLoading: true,
    bookNotFound: false,
    error: null,
    ...restoreCartFromLS()
};

const reducer = (state = initalState, action) => {

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST': {
            return {
                ...state,
                booksLoading: true,
                error: null
            }
        }

        case 'FETCH_BOOKS_SUCCESS': {
            return {
                ...state,
                books: action.payload,
                booksLoading: false,
                error: null
            }
        }

        case 'FETCH_BOOKS_FAILURE': {
            return {
                ...state,
                books: [],
                booksLoading: false,
                error: action.payload
            };
        }

        case 'FETCH_BOOK_REQUEST': {
            return {
                ...state,
                book: null,
                bookLoading: true,
                bookNotFound: false
            }
        }
        case 'FETCH_BOOK_SUCCESS': {
            return {
                ...state,
                book: action.payload,
                bookLoading: false,
                bookNotFound: false
            }
        }
        case 'FETCH_BOOK_ERROR': {
            return {
                ...state,
                book: null,
                bookLoading: false,
                bookNotFound: true
            }
        }



        case 'BOOK_ADDED_TO_CART': {
            const { cart, books } = state;
            const book = books.find(({ id }) => id === action.payload);
            const itemIdx = cart.findIndex(({ id }) => id === action.payload);
            const cartItem = cart[itemIdx];
            const newItem = updateCartItem(book, cartItem, 1);

            return {
                ...state,
                ...updateCartItems(cart, newItem, itemIdx)
            };

        }

        case 'BOOK_REMOVED_FROM_CART': {
            const { cart, books } = state;
            const book = books.find(({ id }) => id === action.payload);
            const itemIdx = cart.findIndex(({ id }) => id === action.payload);
            const cartItem = cart[itemIdx];
            const newItem = updateCartItem(book, cartItem, -1);

            return {
                ...state,
                ...updateCartItems(cart, newItem, itemIdx)
            };
        }

        case 'REMOVE_ALL_BOOKS_FROM_CART': {
            const { cart, books } = state;
            const book = books.find(({ id }) => id === action.payload);
            const itemIdx = cart.findIndex(({ id }) => id === action.payload);
            const cartItem = cart[itemIdx];
            const newItem = updateCartItem(book, cartItem, -cartItem.count);

            return {
                ...state,
                ...updateCartItems(cart, newItem, itemIdx)
            };;

        }

        default: return state;
    }
};

export default reducer;