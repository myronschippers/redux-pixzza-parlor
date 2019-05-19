const totalCostReducer = (state = 0.00, action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case 'ADD_PIZZA_ORDER':
            return state + parseFloat(payload.price);
        case 'REMOVE_PIZZA_ORDER':
            return state - parseFloat(payload.price);
        default:
            return state;
    }
};

export default totalCostReducer;
