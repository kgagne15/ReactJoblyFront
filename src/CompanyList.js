import React from "react";
import {Link} from "react-router-dom";

const CompanyList = ({company}) => {
    return (
        <>  
            <Link to={`/companies/${company.handle}`}><h3>{company.name}</h3></Link>
            <p>{company.description}</p>
        </>

    )
}

export default CompanyList;