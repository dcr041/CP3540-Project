import {faCat,faMountain,faFutbol} from '@fortawesome/free-solid-svg-icons';

var CATEGORIES = "";

const date = new Date();
if (date.getDay() === 3) {
    CATEGORIES = {
        animals: {
            name: 'Animals',
            icon: faCat ,
            color: 'green',
        },
        geography: {
            name: 'Geography',
            icon: faMountain,
            color: 'yellow',
        },
        sports: {
            name: 'Sports',
            icon: faFutbol,
            color: 'red',
        },
    };
} else {alert("Error")};



export default CATEGORIES;
