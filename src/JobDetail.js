import React from "react";

const JobDetail = ({job}) => {
    return (
        <>
        <h1>{job.title}</h1>
        <h3>Company: {job.companyName}</h3>
        <p>Salary: {job.salary}</p>
        <button>Apply</button>
        </>
    )
}

export default JobDetail; 