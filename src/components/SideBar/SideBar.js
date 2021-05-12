import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}
        >
            <ul className="list-unstyled">
                <li>
                <Link to="/home">
                    Home
                </Link>
                </li>
                <li>
                    <Link to="/dashboard/course">
                        <span>My Course</span>
                    </Link>
                </li>
               
            </ul>
        </div>
    );
};

export default SideBar;