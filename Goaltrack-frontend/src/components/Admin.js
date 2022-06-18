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
 
    return(
        <div>
            <h1>Employees under {localStorage.getItem('email')}</h1>
            <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                    onSelectedRowsChange={handleChange}
                />
            <input
        className="inputs"
        type="month"
        value={selectDate}
        onChange={(e) =>setselectDate(e.target.value)}
             />
            
            <p>Choose one Employee and month to see his/her data</p>
            <button
        className="buttons"
        onClick={({e,empData}) => {
          console.log(`selected date:${selectDate}`);

          var d = { month: selectDate };
          var val = getMonth(d);
          console.log(val);
          function getMonth(d) {
            var dt = new Date(d.month);
            var dtm = dt.getMonth();
            return dtm + 1;
          };
          const EmpData =employeeData(selectedRows,val);
  EmpData.then((response) => {
    console.log(response.response);
    setempData(response.response);
   
      
        })}}
      >
        View</button>
            <DataTable
                    columns={columns2}
                    data={empData} />
                
            
        </div>
    )
}
export default Admin;