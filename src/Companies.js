import React, {useState, useEffect} from "react";
import CompanyList from "./CompanyList";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";

const Companies = () => {

    let [companies, setCompanies] = useState([]);

    useEffect(function getCompaniesOnMount() {
        search();
    }, []);


    async function search(name) {
        let companiesRes = await JoblyApi.getCompanies(name);
        setCompanies(companiesRes);
    }
          
    return (
    <>
    <h1>All Companies</h1>
        <SearchForm search={search}/>

       {companies.length ? (
        <div>
            {companies.map(comp => (
          <div key={comp.handle}>
            <CompanyList company={comp}/>
          </div>
        ))}
        </div>
       ) : (
        <p>Sorry, there are no results from that search</p>
       )
    
    }
        
    </>
    )
}

export default Companies;