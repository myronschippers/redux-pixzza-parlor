const typeReducer = (state = '', action) => {
    const {
        type,
        payload,
    } = action;

    if (type !== 'ADD_DELIVERY_TYPE') {
        return state;
    }
    console.log('payload', payload);

    return payload;
};

export default typeReducer;
