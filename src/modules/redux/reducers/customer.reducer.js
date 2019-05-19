const defaultCustomer = {
    name: '',
    streetAddress: '',
    city: '',
    zip: '',
};
const customerReducer = (state = {...defaultCustomer}, action) => {
    const {
        type,
        payload,
    } = action;

    if (type !== 'ADD_CUSTOMER_INFO') {
        return state;
    }
    
    switch (type) {
        case 'CLEAR_PIZZA_ORDER':
            return {
                name: '',
                streetAddress: '',
                city: '',
                zip: '',
            };
            break;
        default:
            return {
                ...state,
                ...payload,
            };
            break;
    }
};

export default customerReducer;
