const orderReducer = (state = [], action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case 'ADMIN_ORDER_HISTORY':
            return [...payload];
        default:
            return [...state];
    }
};

export default orderReducer;