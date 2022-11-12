import React, {useContext, useState} from "react";
import JoblyApi from "./api";
import UserContext from "./UserContext";


const Profile = () => {

    

    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: ''
    })


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }


    async function handleSubmit(e) {
        e.preventDefault();
        
        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        }

        let username = formData.username;

        let updatedUser = await JoblyApi.saveProfile(username, profileData);


        setFormData(f => ({...f, password: ''}));
        setCurrentUser(updatedUser);
        


    }

    console.log(currentUser)
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name: </label>
            <input
                id="firstName"
                name="firstName"
                placeholder={currentUser.firstName}
                value={formData.firstName}
                onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name: </label>
            <input
                id="lastName"
                name="lastName"
                placeholder={currentUser.lastName}
                value={formData.lastName}
                onChange={handleChange}
            />

            <label htmlFor="email">Email: </label>
            <input
                id="email"
                name="email"
                placeholder={currentUser.email}
                value={formData.email}
                onChange={handleChange}
            />

            <label htmlFor="username">Username: </label>
            <input
                id="username"
                name="username"
                placeholder={currentUser.username}
                value={formData.username}
                onChange={handleChange}
            />

            <label htmlFor="password">Enter Password to Submit Changes: </label>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>

    )
}

export default Profile;