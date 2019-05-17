const defaultCustomer = {
    name: '',
    streetAddress: '',
    city: '',
    zip: '',
};
const customerReducer = (state = defaultCustomer, action) => {
    const {
        type,
        payload,
    } = action;

    if (type !== 'ADD_CUSTOMER_INFO') {
        return state;
    }
    console.log('payload', payload);

    return {
        ...state,
        ...payload,
    };
};

export default customerReducer;
