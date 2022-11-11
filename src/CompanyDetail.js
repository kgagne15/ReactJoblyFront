import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "./api";
import Jobs from "./Jobs";


// const CompanyDetail = () => {
//     const { handle } = useParams();

//     const [company, setCompany] = useState([]);

//     useEffect(function getCompanyAndJobsForUser() {
//               async function getCompany() {
//                 setCompany(await JoblyApi.getCompany(handle));
//               }
          
//               getCompany();
//             }, [handle]);

//     console.log(handle, 'handle')
//     console.log('COMPANY', company)

//     return (
//         <div>
//             <h2>{company.name}</h2>
//             <p>{company.description}</p>
//             {/* <Jobs givenJobs={company.jobs}/> */}
//             <ul>{company.jobs.map(j => {
//                 return <li>{j.title}</li>
//             })}
//             </ul>
//         </div>
//     )
// }

// export default CompanyDetail; 



function CompanyDetail() {
    const { handle } = useParams();
    console.debug("CompanyDetail", "handle=", handle);
  
    const [company, setCompany] = useState([]);
  
    useEffect(function getCompanyAndJobsForUser() {
      async function getCompany() {
        setCompany(await JoblyApi.getCompany(handle));
      }
  
      getCompany();
    }, [handle]);
  
    // if (!company) return <LoadingSpinner />;
  
    console.log("COMPANY", company)
    return (
        <div>
          <h4>{company.name}</h4>
          <p>{company.description}</p>
          {/* <JobCardList jobs={company.jobs} /> */}
          <ul>{company.jobs.map(j => {
                return <li>{j.title}</li>
            })}
            </ul>
        </div>
    );
  }
  
  export default CompanyDetail;
  