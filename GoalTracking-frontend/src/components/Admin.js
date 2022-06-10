import React, { useState } from "react";
import DataTable from 'react-data-table-component';
import { useLocation } from "react-router-dom";
import { employeeData } from "./api";



const Admin=()=>{
    const location=useLocation();
    const data=location.state.employe
    const to=location.state.token;
    console.log(data)
    console.log(to)
    const [selectedRows, setSelectedRows] =useState(false);
    const [selectDate,setselectDate]=useState("");
    console.log(selectDate);
    const [empData,setempData]=useState("")
  
  

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

    const columns2 = [
        {
            name: 'email',
            selector: row => row.email_id,
        },
        {
            name: 'goal',
            selector: row => row.goal_name,
        },
        {
            name: 'status',
            selector: row => row.status,
        },
        {
            name: 'month',
            selector: row => row.month,
        },
        
    ];


    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
        console.log(selectedRows)
      };
      const onClickhandler=({empData})=>{
          const EmpData = employeeData(selectedRows,selectDate,to);
          EmpData.then((response) => {
            console.log(response.response);
            setempData(response.response);
            console.log("after fetch call",empData)
        
        })}

 
    return(
        <div>
            <h1>Inside admin</h1>
            <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                    onSelectedRowsChange={handleChange}
                />

            <input  className="inputs"type="date"  value={selectDate} onChange={(e) => setselectDate(e.target.value)}/>
            <p>Choose one Employee and date to see his/her data</p>
            <button className="buttons" onClick={onClickhandler}>view emplyee data</button>
            <DataTable
                    columns={columns2}
                    data={empData}
                />
                
            
        </div>
    )
}
export default Admin;