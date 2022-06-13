

async function Usertype({email,token}){
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`,

        },
       
    };
    return fetch(`/users/usertype/${email}`,requestOptions).then((response)=>response.json())}





async function getEmployees(email){
    console.log("inside getEmployees api calls",email)
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch(`/users/employees/${email}`,requestOptions).then((response)=>{console.log(response); return response.json()});}



async function employeeData(selectedRows,selectDate){
    console.log("inside the employeedata api call ",localStorage.getItem("token"))
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch(`/empgoals/${selectedRows[0].email}/${selectDate} `,requestOptions).then((response)=>{console.log(response); return response.json()});}
    

async function addgoalstatus(email,goal,status,selectedDate) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        email: email,
        goal: goal,
        status: status,
        month: selectedDate,
      }),
    };
  
    return fetch("/usergoals/addgoalStatus", requestOptions).then((response) =>
      response.json()
    );
  }
  

  async function getmygoals(email){
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch(`/usergoals/${email}`,requestOptions).then((response)=>{console.log(response.response); return response.json()});}


    
async function editGoal(selectedRows,goal){
    const requestOptions={
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
        body: JSON.stringify({
            goal: goal,
            
          }),
           
    };
return fetch(`/usergoals/editgoal?email=${selectedRows[0].email_id}&month=${selectedRows[0].month}&goal=${selectedRows[0].goal_name}`,requestOptions).then((response)=>{console.log(response); return response.json()});}
    

async function editStatus(selectedRows,status){
    const requestOptions={
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
        body: JSON.stringify({
            status: status,
            
          }),
           
    };
return fetch(`/usergoals/editstatus?email=${selectedRows[0].email_id}&month=${selectedRows[0].month}&status=${selectedRows[0].status}`,requestOptions).then((response)=>{console.log(response); return response.json()});}
    
async function getAlladmins(){
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch(`/users/admin`,requestOptions).then((response)=>{console.log(response); return response.json()});}

async function deldata(id){
    console.log(id)
    const requestOptions={
        method:"DELETE",
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch(`/usergoals/deletedata?id=${id}`,requestOptions).then((response)=>{return response});}


async function getdatabymonth(email,month){
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch(`/usergoals/${email}/${month} `,requestOptions).then((response)=>{console.log(response); return response.json()});}





export {Usertype,getEmployees,employeeData,addgoalstatus,getmygoals,editGoal,editStatus,getAlladmins,deldata,getdatabymonth}