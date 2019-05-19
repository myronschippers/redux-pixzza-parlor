import axios from 'axios';

/**
 * Calling to the GET API endpoint in order to retrieve a list of the pizza menu items for
 * the user to order from.
 * @returns {Promise}
 */
const getPizzaMenu = () => {
    return axios({
        method: 'GET',
        url: '/api/pizza',
    });
};

/**
 * Post API call for the user's pizza order. The combined data of the pizzas ordered,
 * customer information, delivery type, and total cost will be sent to the server as a
 * single object.
 * @param {object} postData
 * @param {array} postData.pizzaOrder
 * @param {object} postData.customerInfo
 * @param {string} postData.deliveryType
 * @param {number} postData.totalCost
 * @returns {Promise}
 */
const postPizzaOrder = (postData) => {
    const {
        pizzaOrder,
        customerInfo,
        deliveryType,
        totalCost,
    } = postData;
    const pizzas = [];

    // Only taking into consideration a quantity of 1 because the FE is not setup to allow
    // the user to add a single item more than once.
    pizzaOrder.forEach((pizzaItem, pizzaIndex) => {
        pizzas.push({
            id: pizzaItem.id,
            quantity: 1,
        });
    });

    // mapping the FE data to the data structure expected on the BE
    const serverData = {
        customer_name: customerInfo.name,
        street_address: customerInfo.streetAddress,
        city: customerInfo.city,
        zip: customerInfo.zip,
        total: totalCost,
        type: deliveryType,
        pizzas: pizzas,
    }

    return axios.post('/api/order', serverData);
};

const getPizzaOrders = () => {
    return axios.get('/api/order');
};

const deletePizzaOrder = (orderId) => {
    return axios.delete(`/api/order/${orderId}`);
};

export {
    getPizzaMenu,
    postPizzaOrder,
    getPizzaOrders,
    deletePizzaOrder,
};
