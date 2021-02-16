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

export const addNewUser = (user) => ({
    type: actionTypes.ADD_NEW_USER,
    payload: user,
});

export const addUser = (data) => {
    return (dispatch) => {
        axios
            .post("https://jsonplaceholder.typicode.com/users", data)
            .then((response) => {
                console.log(response, "addUser res");
                dispatch(addNewUser(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const getUser = (id) => ({
    type: actionTypes.GET_USER,
    payload: id,
});

export const updateUser = (id, data) => {
    return (dispatch) => {
        axios
            .put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
            .then((response) => {
                console.log(response, "updateuser res");
                dispatch(getUser(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
