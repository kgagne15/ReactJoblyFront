import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "./api";
import JobDetail from "./JobDetail";
import LoadingSpinner from "./LoadingSpinner";


function CompanyDetail() {
    const { handle } = useParams();
    console.debug("CompanyDetail", "handle=", handle);
  
    const [company, setCompany] = useState(null);
    
    // async function getCompanyInfo() {
    //     let res = await JoblyApi.getCompany(handle)
    //     setCompany(res)
    // }

    useEffect(function getSomething() {
        getCompanyInfo()
    }, [handle])
  

    async function getCompanyInfo() {
        let res = await JoblyApi.getCompany(handle)
        setCompany(res)
    }

    console.log("COMPANY", company)
    if (!company) return <LoadingSpinner />;
    return (
        <>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            <p>Number of Employees: {company.numEmployees}</p>
            <ul>
                {company.jobs.map(j => {
                    return <JobDetail job={j}/>
                })}
            </ul>
        </>
    )

  }
  
  export default CompanyDetail;
  
  