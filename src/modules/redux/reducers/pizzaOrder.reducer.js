const pizzaOrderReducer = (state = [], action) => {
    const {
        type,
        payload
    } = action;

    if (type === 'ADD_PIZZA_ORDER') {
        return [...state, payload];
    } else if (type === 'REMOVE_PIZZA_ORDER') {
        return state.filter(pizza => {
            return pizza.id !== payload.id;
        })
    }

    return state;
}

export default pizzaOrderReducer;
