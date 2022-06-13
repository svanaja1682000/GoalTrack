import React, { useState } from "react";
import DataTable from 'react-data-table-component';
import {getAlladmins, getEmployees,employeeData} from "./api";


const Superadmin=()=>{
    const [admin,setAdmin]=useState([]);
    const [selectedRows, setSelectedRows] =useState(false);
    const [adminEmp,setAdminemp]=useState("")
    const [gdo,setSelectedgdo]=useState("")
    const [selectDate,setselectDate]=useState("");
    const [selectemp,setSelectemp]=useState("")

    const columns = [
        {
            name: 'usename',
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
      
    const onClickhandler=({admin})=>{
            const getalladmin=getAlladmins();
            getalladmin.then((response)=>{console.log(response.employe);setAdmin(response.employe);})
          
      
    }

    const onClickhandler2=({adminEmp})=>{
        console.log("Inside onClick of employee component");
            const getadminemp=getEmployees(gdo);
            getadminemp.then((response)=>{console.log(response.employe);setAdminemp(response.employe);})}


    
    return(
    <div>
        <h1>Welcome Superadmin {localStorage.getItem('email')}</h1>
        
        <select
       
        onClick={onClickhandler}
        onChange={(e) => {
          console.log(e.target.value);
          setSelectedgdo(e.target.value);
        }}
      >
         <option value="">Select your GDO</option>
        {admin.map((item) => (
           
          <option key={item.email} value={item.email}>
            {item.gdo}
          </option>
        ))}
      </select>
            <button
            className="buttons"
             onClick={onClickhandler2}
            >Get emplyeees under selected GDO</button>


         <DataTable
                    columns={columns}
                    data={adminEmp}
                    selectableRows
                    onSelectedRowsChange={handleChange}
            /> 
            <input
        className="inputs"
        type="month"
        value={selectDate}
        onChange={(e) =>setselectDate(e.target.value)}
             />

            
            <button
            className="buttons"
            onClick={({e,selectemp}) => {
              console.log(`selected date:${selectDate}`);
    
              var d = { month: selectDate };
              var val = getMonth(d);
              console.log(val);
              function getMonth(d) {
                var dt = new Date(d.month);
                var dtm = dt.getMonth();
                return dtm + 1;
              };
              console.log("Inside onClick of employee component");
              const getempdata=employeeData(selectedRows,val);
              getempdata.then((response)=>{console.log(response.response);setSelectemp(response.response);});
              
        }}
          >
            View</button>



            <DataTable
                    columns={columns2}
                    data={selectemp}
                    
            /> 


        
</div>
    )
}
export default Superadmin;