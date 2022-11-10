import React from "react";

const CompanyList = ({company}) => {
    return (
        <>  
            <h3>{company.name}</h3>
            <p>{company.description}</p>
        </>

    )
}

export default CompanyList;