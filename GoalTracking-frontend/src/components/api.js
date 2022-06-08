

async function Usertype({email,token}){
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`,

        },
       
    };
    return fetch(`/users/usertype/${email}`,requestOptions).then((response)=>response.json())}

async function getEmployees(email,token){
    const requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`,
    
        },
           
    };
return fetch(`/users/employees/${email}`,requestOptions).then((response)=>{console.log(response.response); return response.json()});}
    



export {Usertype,getEmployees}