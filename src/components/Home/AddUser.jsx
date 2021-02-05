import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
import { addUser } from "../../store/actions";

const AddUser = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const createNewUser = (e) => {
        e.preventDefault();
        const new_user = {
            id: shortid.generate(),
            name,
            email,
            phone,
        };
        dispatch(addUser(new_user));
        history.push("/");
    };

    return (
        <>
            <div className='card'>
                <div className='card-head bg-warning p-3'>
                    <h5 className='card-title text-center mb-0'>
                        ADD NEW USER
                    </h5>
                </div>

                <form onSubmit={(e) => createNewUser(e)}>
                    <div className='form-group my-2'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Your Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='form-group my-2'>
                        <input
                            type='email'
                            className='form-control'
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='form-group my-2'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Your Phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <button className='btn btn-secondary ' type='submit'>
                        Add User
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddUser;
