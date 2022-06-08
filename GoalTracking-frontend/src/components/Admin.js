import React from "react";
import DataTable from 'react-data-table-component';
import { useLocation } from "react-router-dom";

const Admin=()=>{
    const location=useLocation();
    console.log(location.state.employe)
    const data=location.state.employe
    console.log(data)

    const columns = [
        {
            name: 'username',
            selector: row => row.username,
        },
        {
            name: 'email',
            selector: row => row.email,
        },
        
    ];
    return(
        <div>
            <h1>Inside admin</h1>
            <h5>{data}</h5>
            <DataTable
                    columns={columns}
                    data={data}
                />
        </div>
    )
}
export default Admin;