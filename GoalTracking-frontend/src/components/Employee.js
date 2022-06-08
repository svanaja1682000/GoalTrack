import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
const Employee=(props)=>{
    const location=useLocation()
    
    const [selectedDate,setSelectedDate]=useState("")
    
     console.log(location.state.value)
     console.log(location.state.email);
     const email=location.state.email;
     if(location.state.value===1){
        return (
            <div >

                
              <h1>view latest month data</h1>

            </div>
          );

     }

     else if(location.state.value===2){
        return (
            <div >
              <h1>slected month data</h1>
              <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
              <button onClick={(e) => {
              console.log(`selected date:${selectedDate}`);
              //const monthdata = MonthData({ selectedDate,email });
              }} >View</button >
              
            </div>
          );

     }

     else if(location.state.value===3){
        return (
            <div >
              <h1>Add new goal and status</h1>




              
            </div>
          );

     }

     else if(location.state.value===4){
        return (
            <div >
              <h1>Edit goal</h1>
              
            </div>
          );

     }
     else if(location.state.value===5){
        return (
            <div >
              <h1>edit status</h1>
              
            </div>
          );

     }
    
    }


    

export default Employee;