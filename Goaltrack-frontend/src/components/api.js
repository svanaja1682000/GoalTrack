

async function Usertype({token}){
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`,

        },
       
    };
    return fetch("/users/usertype",requestOptions).then((response)=>response.json())}





async function getEmployees(){
    console.log("inside getEmployees api calls")
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch("/users/employees/",requestOptions).then((response)=>{console.log(response); return response.json()});}


async function getEmployeessuperadmin(email){
    console.log("inside getEmployees api calls")
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch(`/users/empunderadmin/${email}`,requestOptions).then((response)=>{console.log(response); return response.json()});}




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
    

async function addgoalstatus(goal,status,selectedDate) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        goal: goal,
        status: status,
        month: selectedDate,
      }),
    };
  
    return fetch("/usergoals/addgoalStatus", requestOptions).then((response) =>
      response.json()
    );
  }
  

  async function getmygoals(){
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch("/usergoals/",requestOptions).then((response)=>{console.log(response.response); return response.json()});}


    
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
return fetch("/users/2",requestOptions).then((response)=>{console.log(response); return response.json()});}

async function deldata(id){
    console.log(id)
    const requestOptions={
        method:"DELETE",
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch(`/usergoals/deletedata?id=${id}`,requestOptions).then((response)=>{return response});}


async function getdatabymonth(month){
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch(`/usergoals/${month}`,requestOptions).then((response)=>{console.log(response); return response.json()});}


async function getadmindetails(email){
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
    
        },
           
    };
return fetch(`/users/admindetails/${email}/ `,requestOptions).then((response)=>{console.log(response); return response.json()});}



export {Usertype,getEmployees,employeeData,addgoalstatus,getmygoals,editGoal,editStatus,getAlladmins,deldata,getdatabymonth,getadmindetails,getEmployeessuperadmin}