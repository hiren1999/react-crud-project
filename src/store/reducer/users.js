import * as actionTypes from "../actions/actionType";

const initState = {
    loading: false,
    users: [],
    user: null,
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
        case actionTypes.GET_USER:
            let arr = state.users.filter((user) => user.id === action.payload);
            arr = arr.values();
            for (let val of arr) {
                arr = val;
            }
            return {
                ...state,
                user: arr,
            };
        case actionTypes.UPDATE_USER:
            return {
                ...state,
                user: state.user.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                ),
            };
        default:
            return state;
    }
};

export default usersReducer;
