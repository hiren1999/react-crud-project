import React, { useEffect, useState } from "react";
import "./Basictable.css";
import { connect } from "react-redux";
import { deleteUser, fetchUsers } from "../../../store/actions/index";
import ReactDatatable from "@ashvin27/react-datatable";
import Loader from "../Loader/Loader";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

const BasicTable = (props) => {
    const { userData, fetchUsers, deleteUser } = props;

    const [config, setConfig] = useState({
        page_size: 10,
        length_menu: [10, 20, 50],
    });

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const editRecord = (record) => {
        console.log("Edit Record", record);
    };

    const deleteRecord = (id) => {
        deleteUser(id);
    };

    const columns = [
        {
            text: "Id",
            key: "id",
            sortable: true,
        },
        {
            text: "Name",
            key: "name",
            sortable: true,
        },
        {
            text: "Email",
            key: "email",
            sortable: true,
        },
        {
            text: "Phone",
            key: "phone",
            sortable: true,
        },
        {
            key: "action",
            text: "Action",
            width: 100,
            align: "left",
            sortable: false,
            cell: (record) => {
                return (
                    <>
                        <button
                            className='btn btn-primary btn-sm'
                            onClick={() => editRecord(record)}
                            style={{ marginRight: "5px" }}>
                            <MdModeEdit />
                        </button>
                        <button
                            className='btn btn-danger btn-sm'
                            onClick={() => deleteRecord(record.id)}>
                            <FaTrashAlt />
                        </button>
                    </>
                );
            },
        },
    ];

    return userData.loading ? (
        <Loader />
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <>
            <div className='table-responsive'>
                <ReactDatatable
                    config={config}
                    records={props.userData.users}
                    columns={columns}
                />
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        deleteUser: () => dispatch(deleteUser()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicTable);
