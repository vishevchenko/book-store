export default class BookStoreService {

    data = [
        {
            id: 1,
            title: "Arm of the Law",
            author: "Harry Harrinson",
            price: 9.49,
            coverImg: 'https://m.media-amazon.com/images/I/91pgFjIymFL._AC_UY218_ML3_.jpg',
            description: `At one time--this was before the Robot Restriction Laws--they'd even allowed them to make their own decisions....
        It was a big, coffin-shaped plywood box that looked like it weighed a ton. This brawny type just dumped it through the door of the police station and started away. I looked up from the blotter and shouted at the trucker's vanishing back.
        "What the hell is that?"
        "How should I know?" he said as he swung up into the cab. "I just deliver, I don't X-ray 'em. It came on the morning rocket from earth is all I know." He gunned the truck more than he had to and threw up a billowing cloud of red dust.`
        },
        {
            id: 2,
            title: "101 Science Fiction Short Stories",
            author: " Isaac Asimov, Ray Bradbury1",
            price: 1.99,
            coverImg: 'https://m.media-amazon.com/images/I/71p6mWJWjkL._AC_UY218_ML3_.jpg',
            description: 'A collection which includes stories by such noted science fiction writers as Robert Silverberg, Norman Spinrad, Roger Zelazny, Frederik Pohl and Isaac Asimov'
        },
        {
            id: 3,
            title: "The Science Fiction Collection",
            author: "Philip K. Dick, Andre Norton",
            price: 0.99,
            coverImg: 'https://m.media-amazon.com/images/I/71ymFacvu7L._AC_UY218_ML3_.jpg',
            description: 'The Science Fiction Collection features some of the most amazing sci fi tales ever told!'
        },
        {
            id: 4,
            title: "Life of Pi",
            author: "Yann Martel",
            price: 9.99,
            coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320562005l/4214.jpg',
            description: 'Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger named Richard Parker.'
        },
        {
            id: 5,
            title: "Boneshaker",
            author: "Cherie Priest",
            price: 12.99,
            coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433161048l/1137215._SY475_.jpg',
            description: 'In the early days of the Civil War, rumors of gold in the frozen Klondike brought hordes of newcomers to the Pacific Northwest. Anxious to compete, Russian prospectors commissioned inventor Leviticus Blue to create a great machine that could mine through Alaska’s ice. Thus was Dr. Blue’s Incredible Bone-Shaking Drill Engine born.'
        },
        {
            id: 6,
            title: "Infernal Devices",
            author: "K.W. Jeter",
            price: 4.99,
            coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320437674l/9222475.jpg',
            description: 'HE INHERITED A WATCHMAKER\'S STORE - AND A WHOLE HEAP OF TROUBLE. But idle sometime-musician George has little talent for clockwork. And when a shadowy figure tries to steal an old device from the premises, George finds himself embroiled in a mystery of time travel, music and sexual intrigue. A genuine lost classic, a steampunk original whose time has come.'
        }
    ];

    getBooks = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Math.random() < 0.75 ?
                    resolve(this.data);// :
                    // reject(new Error('Failed to load books list'));
            }, 700);
        });
    }

    getBookById = (bookId) => {
        return this.getBooks()
            .then(books => {
                return books.find(({ id }) => { return id === bookId })
            })
    }
}
