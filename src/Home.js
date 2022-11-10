import React, {useContext} from "react";
import UserContext from "./UserContext";

const Home = () => {
    const {currentUser} = useContext(UserContext);

    if (currentUser) {
        return (
        <>
        <h1>Welcome to Jobly!</h1>
        <p>Feel free to browse our available companies and jobs</p>
        </>
        )
    } else {
        return (
            <>
                <h1>Please sign up or login to access our companies and jobs</h1>
            </>
        )
    }
    
}

export default Home;