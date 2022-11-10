import React from "react";
import {Link} from "react-router-dom";


function Nav() {
    return (
        <ul>
            <li><Link to="/">Jobly</Link></li>
            <li><Link to="/companies">Companies</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    )
}

export default Nav;