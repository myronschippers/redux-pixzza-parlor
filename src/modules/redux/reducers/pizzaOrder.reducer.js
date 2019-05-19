const pizzaOrderReducer = (state = [], action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case 'ADD_PIZZA_ORDER':
            return [...state, payload];
        case 'REMOVE_PIZZA_ORDER':
            return state.filter(pizza => {
                return pizza.id !== payload.id;
            });
        case 'CLEAR_PIZZA_ORDER':
            return [];
        default:
            return state;
    }

    return state;
}

export default pizzaOrderReducer;
