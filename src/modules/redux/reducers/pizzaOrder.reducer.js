const pizzaOrderReducer = (state = [], action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case 'ADD_PIZZA_ORDER':
            return [...state, payload];
            break;
        case 'REMOVE_PIZZA_ORDER':
            return state.filter(pizza => {
                return pizza.id !== payload.id;
            });
            break;
        case 'CLEAR_PIZZA_ORDER':
            return [];
            break;
        default:
            return state;
            break;
    }

    return state;
}

export default pizzaOrderReducer;
