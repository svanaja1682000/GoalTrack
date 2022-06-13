import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getEmployees,getdatabymonth } from "./api";
import Select from "react-select";
import Superadmin from "./Superadmin";
import DataTable from "react-data-table-component";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");
  const [employee, setEmplyee] = useState();
  const [Latestmonthdata,setlatestmonthdata]=useState("")
  console.log(localStorage.getItem('role'))

  const columns2 = [
    
    {
      name: "email",
      selector: (row) => row.email_id,
    },
    {
      name: "goal",
      selector: (row) => row.goal_name,
    },
    {
      name: "status",
      selector: (row) => row.status,
      conditionalCellStyles: [
        {
          when: (row) => row.status == "completed",
          style: {
            color: "green",
          },
        },
        {
          when: (row) => row.status != "completed",
          style: {
            color: "orange",
          },
        },
      ],
    },
    {
      name: "month",
      selector: (row) => row.month,
    },
  ];
  

  const data = [

    {
      value: 1,
      label: "previous month data",
    },
    {
      value: 2,
      label: "Add new goal and status",
    },
    {
      value: 3,
      label: "Edit goal",
    },
    {
      value: 4,
      label: "Edit status",
    },
    {
      value: 5,
      label: "delete goal",
    },
  ];


  const handleChange = (e) => {
    setSelectedValue(e.value);
    navigate("/employee", {
      state: {
        value: e.value,
        email: localStorage.getItem("email"),
        token: localStorage.getItem("token"),
      },
    });
  };
  useEffect(() => {
    async function latestData() {
      const dt=new Date()
      const dtm=dt.getMonth()+1
      console.log(dtm);
      const latestmonthdata = await getdatabymonth(localStorage.getItem('email'),dtm);
      console.log(latestmonthdata.response);
      setlatestmonthdata(latestmonthdata.response);
    }
    latestData();
  }, []);

  //console.log(location.state.role)
  if (localStorage.getItem('role') === "employee") {
    return (
      <div>
        <h1>Welcome {localStorage.getItem('email')}</h1><br/><br/>
        <div style={{paddingBottom:"2em"}}>
          <h2>Here are your latest month goals</h2>
        <DataTable
          titel="My goals"
          columns={columns2}
          data={Latestmonthdata}
        />
      </div>
      <h2>To perform any other actions on your goals data do choose one of the options</h2>
        <Select
          placeholder="Select Option"
          value={data.find((obj) => obj.value === selectedValue)}
          options={data}
          onChange={handleChange}
        />

       
      </div>
    );
  } else if (localStorage.getItem('role') === "admin") {
    return (
      <div>
        <h1>Welcome {localStorage.getItem('email')}</h1>
        <button
        className="buttons"
          onClick={() => {
            console.log("Inside onClick of admin dashboard component");
            console.log(`email: ${localStorage.getItem('email')}`);
            const employees = getEmployees(
              localStorage.getItem('email'),
             localStorage.getItem('token')
            );
            employees.then((response) => {
              console.log(response.employe);
              navigate("/admin", {
                state: {
                  employe: response.employe,
                  email: localStorage.getItem('email'),
                  token: localStorage.getItem('token')
                },
              });
            });
          }}
        >
          View Employees
        </button>
      </div>
    );
  } else {
    return (
      <div>
       
        <Superadmin />

      </div>
    );
  }
};
export default Dashboard;
