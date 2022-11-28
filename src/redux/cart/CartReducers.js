import { GET_COUNT } from "./CartTypes";

const initialState = {
    count: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNT: return {
            ...state,
            count: action.payload
        }
        default: return state
    }
}
export default cartReducer;