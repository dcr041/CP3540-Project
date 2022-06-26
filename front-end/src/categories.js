import {faFutbol, faChess, faGamepad, faMusic, faPerson, faPaintbrush, faTree,
    faMountain, faCat, faCarSide, faCalculator, faComputer, faHandshake,
    faMonument, faBrain, faFilm, faPen, faTv, faScroll, faBook, faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

var CATEGORIES = "";

const date = new Date();
if (date.getDay() === 0) {
    CATEGORIES = {
        sports: {
            name: 'Sports',
            icon: faFutbol,
            color: 'green',
        },
        boardGames: {
            name: 'Board Games',
            icon: faChess,
            color: 'yellow',
        },
        videoGames: {
            name: 'Video Games',
            icon: faGamepad,
            color: 'red',
        },
    };
} else if (date.getDay() === 1) {
    CATEGORIES = {
        music: {
            name: 'Music, Musicals & Theatre',
            icon: faMusic,
            color: 'green',
        },
        celebrities: {
            name: 'Celebrities',
            icon: faPerson,
            color: 'yellow',
        },
        art: {
            name: 'Art',
            icon: faPaintbrush,
            color: 'red',
        },
    };
} else if (date.getDay() === 2) {
    CATEGORIES = {
        scienceNature: {
            name: 'Science & Nature',
            icon: faTree,
            color: 'green',
        },
        geography: {
            name: 'Geography',
            icon: faMountain,
            color: 'yellow',
        },
        animals: {
            name: 'Animals',
            icon: faCat,
            color: 'red',
        },
    };
} else if (date.getDay() === 3) {
    CATEGORIES = {
        vehicles: {
            name: 'Vehicles',
            icon: faCarSide,
            color: 'green',
        },
        mathematics: {
            name: 'Mathematics',
            icon: faCalculator,
            color: 'yellow',
        },
        gadgetsComputers: {
            name: 'Gadgets & Computers',
            icon: faComputer,
            color: 'red',
        },
    };
} else if (date.getDay() === 4) {
    CATEGORIES = {
        politics: {
            name: 'Politics',
            icon: faHandshake,
            color: 'green',
        },
        historyMythology: {
            name: 'History & Mythology',
            icon: faMonument,
            color: 'yellow',
        },
        generalKnowledge: {
            name: 'General Knowledge',
            icon: faBrain,
            color: 'red',
        },
    };
} else if (date.getDay() === 5) {
    CATEGORIES = {
        film: {
            name: 'Film',
            icon: faFilm,
            color: 'green',
        },
        cartoonsAnimation: {
            name: 'Cartoons & Animation',
            icon: faPen,
            color: 'yellow',
        },
        television: {
            name: 'Television',
            icon: faTv,
            color: 'red',
        },
    };
} else if (date.getDay() === 6) {
    CATEGORIES = {
        comics: {
            name: 'Comics',
            icon: faScroll,
            color: 'green',
        },
        books: {
            name: 'Books',
            icon: faBook,
            color: 'yellow',
        },
        animeManga: {
            name: 'Japanese Anime & Manga',
            icon: faBookOpen,
            color: 'red',
        },
    };
};

export default CATEGORIES;
