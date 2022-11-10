import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "./api";
import Jobs from "./Jobs";


const CompanyDetail = () => {
    const {handle} = useParams();

    const [company, setCompany] = useState(null);

    useEffect(function getCompanyAndJobs() {
        async function getCompany() {
            let res = await JoblyApi.getCompany(handle)
            setCompany(res);
        }

        getCompany()
    }, [handle])

    console.log(handle, 'handle')
    console.log('COMPANY', company)

    return (
        <div>
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            {/* <Jobs jobs={jobs}/> */}
            <ul>{company.jobs.map(j => {
                <li>{j.title}</li>
            })}
            </ul>
        </div>
    )
}

export default CompanyDetail; 