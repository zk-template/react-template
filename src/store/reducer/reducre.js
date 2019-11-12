const reducer = (state = null, action) => {
    return action.payload ? action.payload : state;
}

export default  reducer;