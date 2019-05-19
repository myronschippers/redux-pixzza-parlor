const totalCostReducer = (state = 0.00, action) => {
    const {
        type,
        payload,
    } = action;
    let itemPrice;

    if (payload != null) {
        itemPrice = Number(payload.price);
    }

    switch (type) {
        case 'ADD_PIZZA_ORDER':
            const increasedCost = state + itemPrice;
            return increasedCost;
        case 'REMOVE_PIZZA_ORDER':
            const decreasedCost = state - itemPrice;
            return decreasedCost;
        default:
            return state;
    }
};

export default totalCostReducer;
