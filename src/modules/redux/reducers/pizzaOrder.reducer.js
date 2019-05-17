const pizzaOrderReducer = (state = [], action) => {
    const {
        type,
        payload
    } = action;

    if (type === 'ADD_PIZZA_ORDER') {
        return [...state, payload];
    }

    return state;
}

export default pizzaOrderReducer;
