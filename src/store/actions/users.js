import axios from "axios";
import * as actionTypes from "./actionType";

export const fetchUsersRequest = () => {
    return {
        type: actionTypes.FETCH_USERS_REQUEST,
    };
};

export const fetchUsersSuccess = (users) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload: users,
    };
};

export const fetchUsersFail = (error) => {
    return {
        type: actionTypes.FETCH_USERS_FAIL,
        payload: error,
    };
};

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const users = response.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                dispatch(fetchUsersFail(error.message));
            });
    };
};

export const deleteUser = (id) => {
    console.log(id, "id");
    return (dispatch) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "DELETE",
            })
            .then((response) =>
                dispatch({
                    type: actionTypes.DELETE_USER,
                    payload: response,
                })
            );
    };
};
