import React, {useState} from "react";
//used solution for help
const SearchForm = ({search}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        search(searchTerm.trim() || undefined)
        setSearchTerm(searchTerm.trim())
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search: </label>
            <input
                id="search"
                name="search"
                placeholder="Search Term"
                value={searchTerm}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}



export default SearchForm; 