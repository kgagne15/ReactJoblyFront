import React, {useState} from "react";

const Signup = ({signup}) => {

    const INITIAL_STATE = {
        "firstName": '',
        "lastName": '',
        "email": '',
        "username": '',
        "password": ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    async function handleSubmit(e) {
        e.preventDefault();
        let result = await signup(formData)
        if (result.success) {
            alert('Success!')
        } else {
            alert('Not a success, try again')
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
            <label htmlFor="firstName">First Name: </label>
            <input
                id="firstName"
                name="firstName"
                placeholder="first name"
                value={formData.firstName}
                onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name: </label>
            <input
                id="lastName"
                name="lastName"
                placeholder="last name"
                value={formData.lastName}
                onChange={handleChange}
            />

            <label htmlFor="email">Email: </label>
            <input
                id="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
            />

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
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default Signup;