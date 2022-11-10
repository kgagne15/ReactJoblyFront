import React, {useContext} from "react";
import UserContext from "./UserContext";

const JobDetail = ({job}) => {
    const {hasAppliedToJob, applyToJob} = useContext(UserContext);

    let id = job.id;
    return (
        <>
        <h1>{job.title}</h1>
        <h3>Company: {job.companyName}</h3>
        <p>Salary: {job.salary}</p>

        {hasAppliedToJob(id) ? <span>Applied</span> : <button onClick={() => applyToJob(id)}>Apply</button>}
        
        </>
    )
}

export default JobDetail; 