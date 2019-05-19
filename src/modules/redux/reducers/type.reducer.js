const typeReducer = (state = '', action) => {
    const {
        type,
        payload,
    } = action;

    if (type !== 'ADD_DELIVERY_TYPE') {
        return state;
    }

    switch (type) {
        case 'CLEAR_PIZZA_ORDER':
            return '';
            break;
        default:
            return payload;
            break;
    }

};

export default typeReducer;
