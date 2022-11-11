import React, {useState, useEffect} from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobDetail from "./JobDetail";

const Jobs = ({givenJobs}) => {

    let [jobs, setJobs] = useState([]);

    useEffect(function getJobsOnMount() {
        search();
    }, []);


    async function search(title) {
        let jobsRes = await JoblyApi.getJobs(title);
        setJobs(jobsRes);
    }

    console.log('JOBS', jobs)

   
        return (
            <>
                <h1>All Jobs</h1>
                <SearchForm search={search}/>
                {jobs.length ? (
                    <div>
                        {jobs.map(j => (
                        <div key={j.id}>
                          <JobDetail job={j}/>
                        </div>
                        ))}
                    </div>
                ) : (
                    <p>Sorry, there are no results from that search</p>
                )}
            </>
            
            )
    
    

    
}

export default Jobs;