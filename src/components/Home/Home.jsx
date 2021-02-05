import React from "react";
import BasicTable from "../UI/DataTable/BasicTable";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className='text-center pt-5'>
                <Link to='/user/add'>
                    <button className='btn btn-secondary '>Add New User</button>
                </Link>
            </div>
            <div className='card'>
                <BasicTable />
            </div>
        </div>
    );
};

export default Home;
