import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const Login = ({login}) => {

    const history = useHistory();


    const INITIAL_STATE = {
        "username": '',
        "password": ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    async function handleSubmit(e) {
        e.preventDefault();
        let result = await login(formData);
        if (result.success) {
            history.push('/')
        } else {
            alert("Cannot login")
        }
        
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
                id="username"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
            />

            <label htmlFor="password">Password: </label>
            <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>

    )
}

export default Login;