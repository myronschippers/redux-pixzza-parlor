const totalCostReducer = (state = '', action) => {
    const {
        type,
        payload,
    } = action;

    if (type !== 'TOTAL_COST') {
        return state;
    }

    return payload;
};

export default totalCostReducer;
