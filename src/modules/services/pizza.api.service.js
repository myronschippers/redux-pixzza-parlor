import axios from 'axios';

const getPizzaMenu = () => {
    return axios({
        method: 'GET',
        url: '/api/pizza',
    });
};


export {
    getPizzaMenu,
};
