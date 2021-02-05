import * as actionTypes from "../actions/actionType";

const initState = {
    loading: false,
    users: [],
    error: "",
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: "",
            };
        case actionTypes.FETCH_USERS_FAIL:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
        case actionTypes.ADD_NEW_USER:
            return {
                loading: false,
                users: [action.payload, ...state.users],
                error: "",
            };
        default:
            return state;
    }
};

export default usersReducer;
