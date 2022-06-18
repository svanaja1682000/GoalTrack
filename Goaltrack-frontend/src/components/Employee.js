import { useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import DataTable from "react-data-table-component";
import React, { useState } from "react";
import {
  addgoalstatus,
  getmygoals,
  editGoal,
  editStatus,
  deldata,
  getdatabymonth
} from "./api";
const Employee = () => {
  const location = useLocation();

  const [selectedDate, setSelectedDate] = useState("");
  const [goal, setGoal] = useState("");
  console.log(goal);
  const [status, setStatus] = useState("");
  const [mygoals, setmygoals] = useState("");
  const [selectedRows, setSelectedRows] = useState(false);
  const [monthdata,setMonthdata]=useState("");
  console.log(mygoals);
  console.log(monthdata);

  console.log(location.state.value);
  console.log(location.state.email);
  const email = location.state.email;
  
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
    },
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
          when: (row) => row.status === "completed",
          style: {
            color: "green",
          },
        },
        {
          when: (row) => row.status !== "completed",
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
          when: (row) => row.status === "completed",
          style: {
            color: "green",
          },
        },
        {
          when: (row) => row.status !== "completed",
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
  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
    console.log(selectedRows);
  };

  const onClickhandler = ({ mygoals }) => {
    console.log(mygoals);
    const mygoalsr = getmygoals(email);
    mygoalsr.then((response) => {
      console.log(response.response);
      setmygoals(response.response);
    });
  };

  

 if (location.state.value === 1) {
  return (
    
    <div>
      <h1>slected month data</h1>
      <input
        className="inputs"
        type="month"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button
        className="buttons"
        onClick={({e,monthdata}) => {
          console.log(`selected date:${selectedDate}`);

          var d = { month: selectedDate };
          var val = getMonth(d);
          console.log(val);
          function getMonth(d) {
            var dt = new Date(d.month);
            var dtm = dt.getMonth();
            return dtm + 1;
          };
          const monthData = getdatabymonth(val);
  monthData.then((response) => {
    console.log(response.response);
    setMonthdata(response.response);
   
      
        })}}
      >
        View
      </button>
      <DataTable
        titel="My goals"
        columns={columns2}
        data={monthdata}
      />

    </div>
  );
  } else if (location.state.value === 2) {
    return (
      <div className="second-input" id="signup">
        <h1>Add new goal and status</h1>
      <div></div>
        <input
        placeholder="provide Goal"
          className="inputs"
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

<div className="second-input">
        <input
          className="inputs"
          type="text"
          placeholder="provide Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
</div>
<div className="second-input">
        <input
            className="inputs"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        /></div>

<div className="second-input">
        <button
          className="buttons"
          onClick={() => {
            console.log("Inside onClick of employee component");
            const addingdata = addgoalstatus(goal, status, selectedDate);
            addingdata.then((response) => {
              console.log(response.message);
              alert(response.message);
            });
          }}
        >
          Add data
        </button></div>
      </div>
    );
  } else if (
    location.state.value === 3 ||
    location.state.value === 4 ||
    location.state.value === 5
  ) {
    return (
      <div>
        <button className="buttons" onClick={onClickhandler}>
          Show all my goals
        </button>
        <DataTable
          titel="My Goals"
          columns={columns}
          data={mygoals}
          selectableRows
          onSelectedRowsChange={handleChange}
        />
        <br />
        <h3>
          To perform any of the below operations do choose a row from data table
        </h3>
     
        <Col style={{ paddingTop: "1em" }}>
          <button
            className="buttons"
            onClick={() => {
              console.log("Inside onClick of edit goal component");
              const deletedata = deldata(selectedRows[0].id);
              deletedata.then((response) => {
                console.log(response);
                alert("deleted successfully");
              });
            }}
          >
            Delete data(goal,status)
          </button>
        </Col>
        <Row>
          <Col style={{ paddingTop: "3em", paddingRight: "3em" }}>
            <label htmlFor="goal">Input Goal :</label>
            <input
              className="inputs"
              type="text"
              placeholder="Give new Goal to be edited"
              name="goal"
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </Col>
          <Col style={{ paddingTop: "5em" }}>
            <button
              className="buttons"
              onClick={() => {
                console.log("Inside onClick of edit goal component");
                const goalEditing = editGoal(selectedRows, goal);
                goalEditing.then((response) => {
                  console.log(response.message);
                  alert(response.message);
                });
              }}
            >
              Edit goal
            </button>
          </Col>
          <Col style={{ paddingTop: "3em" }}>
            <label htmlFor="status">Input Status :</label>
            <input
              className="inputs"
              type="text"
              placeholder="Give new status to be edited"
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Col>
          <Col style={{ paddingTop: "5em" }}>
            <button
              className="buttons"
              onClick={() => {
                console.log("Inside onClick of edit goal component");
                const statusEditing = editStatus(selectedRows, status);
                statusEditing.then((response) => {
                  console.log(response.message);
                  alert(response.message);
                });
              }}
            >
              Edit status
            </button>
          </Col>
        </Row>
        <Row></Row>
      </div>
    );
  }
};

export default Employee;
