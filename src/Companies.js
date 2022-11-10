import React from "react";
import CompanyList from "./CompanyList";


const Companies = ({companies}) => {
    // console.log(companies)
    return (
    <>
    <h1>All Companies</h1>
    
        {companies.map(comp => (
          <div key={comp.handle}>
            <CompanyList company={comp}/>
          </div>
        ))}
      
    </>
    )
}

export default Companies;