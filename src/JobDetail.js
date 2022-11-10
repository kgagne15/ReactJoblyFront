import React from "react";

const JobDetail = ({job}) => {
    return (
        <>
        <h1>{job.title}</h1>
        <h3>{job.companyName}</h3>
        <p>{job.salary}</p>
        </>
    )
}

export default JobDetail; 