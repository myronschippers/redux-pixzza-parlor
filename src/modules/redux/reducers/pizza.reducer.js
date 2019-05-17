const pizzaMenuReducer = (state = [], action) => {
    const {
        type,
        payload
    } = action;

    if (type === 'PIZZA_MENU') {
        return [...payload];
    }

    return state;
}

export default pizzaMenuReducer;
