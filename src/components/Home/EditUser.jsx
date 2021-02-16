import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getUser, updateUser } from "../../store/actions";

const EditUser = () => {
    const { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.users);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (user !== null) {
            setName(user.name);
            setEmail(user.email);
            setPhone(user.phone);
        }
        dispatch(getUser(id));
    }, [user, dispatch, id]);

    const onUpdateUser = (e) => {
        e.preventDefault();
        const updated_user = Object.assign(user, {
            name,
            email,
            phone,
        });
        dispatch(updateUser(updated_user));
        history.push("/");
    };

    return (
        <>
            <div className='card'>
                <div className='card-head bg-warning p-3'>
                    <h5 className='card-title text-center mb-0'>EDIT USER</h5>
                </div>

                <form onSubmit={(e) => onUpdateUser(e)}>
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
                        Update User
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditUser;
