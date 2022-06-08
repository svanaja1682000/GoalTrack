import React, { useState } from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {getEmployees} from "./api";
import Select from 'react-select';


const Dashboard=()=>{
    const location = useLocation();
    const navigate=useNavigate();
    const [selectedValue, setSelectedValue] = useState("");
    const [employee,setEmplyee]=useState();
    


    const data = [
        {
          value: 1,
          label: "View latest month data"
        },
        {
          value: 2,
          label: "previous month data"
        },
        {
          value: 3,
          label: "Add new goal and status"
        },
        {
          value: 4,
          label: "Edit goal"
        },
        {
          value: 5,
          label: "Edit status"
        },
        
      ];
    
     
      const handleChange = e => {
        setSelectedValue(e.value);
        navigate("/employee",{state:{value:e.value,email:location.state.email,token:location.state.token}})
      }
   
    
    
    //console.log(location.state.role)
    if (location.state.role==="employee"){
        return(
            <div>
            <h1>Employee Dashboard</h1>
            <Select
            placeholder="Select Option"
            value={data.find(obj => obj.value === selectedValue)}
            options={data} 
            onChange={handleChange}
          />
           
            
            <input type="month"  required/>  
            </div>
        );
    }
    else if(location.state.role==="admin"){
        return(
            <div>
            <h1>Admin Dashboard</h1>
            <button 
                onClick={() => {
                    console.log("Inside onClick of admin dashboard component");
                    console.log(`email: ${location.state.email}`);
                    const employees=getEmployees(location.state.email,location.state.token);
                    employees.then((response) => {
                        console.log(response.response);
                        navigate("/admin",{state:{employe:response.response,email:location.state.email}})
                })
                      
                }}>View Employees</button>

            


            <input type="month"  required/>  
            </div>
        )
        
    }

    else{
        return(
            <div>
            <h1>Super Admin Dashboard</h1>
            <input type="month"  required/>  
            </div>
        )
        
    }

    
    
        
};
export default Dashboard;


