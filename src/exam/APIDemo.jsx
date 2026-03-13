import React, { useEffect,useState } from 'react'

export default function APIDemo() 
{
    const [companies,setData] = useState([])
    const [error,setError] = useState("")

    useEffect(() => {
        fetch("https://dummy-json.mock.beeceptor.com/companies").then((response) => 
        response.json()
    ).then((companies) => 
        setData(companies)
    ).catch((err) => {
        setError(err.message)
    });
    }, []);// Empty Dependency Array
  return (
    <div>
        <h2><u>Fetch API Demo</u></h2>
        {
            error ? <b>{error}</b> :
            companies.length == 0 ?
            <b>Loading....</b> :

        
        <table border={1}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                
            </tr>
            {
                companies.map((companies,index) => (
                    <tr key={index}>
                        <td>{companies.id}</td>
                        <td>{companies.name}</td>
                        <td>{companies.address}
                            </td>
                    </tr>
                ))
            }
        </table>
}

    </div>
    
  )
}
