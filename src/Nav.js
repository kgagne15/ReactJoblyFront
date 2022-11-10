import React, {useContext} from "react";
import {Link} from "react-router-dom";
import UserContext from "./UserContext";


function Nav({logout}) {
    const {currentUser} = useContext(UserContext);

    if (currentUser) {
        return (
        <ul>
            <li><Link to="/">Jobly</Link></li>
            <li><Link to="/companies">Companies</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li>
                <Link to="/" onClick={logout}>
                    Log out {currentUser.first_name || currentUser.username}
                </Link>
            </li>
        </ul>
    )
    } else {
        return (
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        )
    }

    
}

export default Nav;