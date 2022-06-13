import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
//import "./Signup.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(`in side sigup :${JSON.stringify(data, null, 2)}`);
    axios({
      method: "post",
      url: "/signup",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        username: data.username,
        age: data.age,
        skills: data.skills,
        email: data.email,
        password: data.password,
        role: data.role,
        gdo: data.gdo,
      },
    }).then((response) => {
      console.log(JSON.stringify(response.data));
      alert(`${JSON.stringify(response.data)}`);
    });
  };

  return (
    <div className="main">
      <div className="sub-main2">
      <form className="sign" onSubmit={handleSubmit(onSubmit)}>
      <h1>Registration Form</h1>
      <div>
     
        
        <input  className="inputs" type="text" placeholder="Username" {...register("username",{ required: true })} />
    </div>

      <div  className="second-input">
        
        <input
          type="number"
          className="inputs"
          {...register("age")}
          placeholder="Enter age"
          required
          min="18"
          max="90"
        />
        </div>

        <div  className="second-input">
        
        <input className="inputs" type="text" placeholder="Skills" {...register("skills")} />
        </div>

        <div  className="second-input">
       
        <input  className="inputs" type="email" placeholder="Email" {...register("email", { required: true })} />
        {errors.email && (
          <span style={{ color: "red" }}>*Email* is mandatory </span>
        )}
        </div>

        <div  className="second-input">
       
        <input  className="inputs" type="password" placeholder="Password" {...register("password", { required: true })} />
        {errors.password && (
          <span style={{ color: "red" }}>*password* is mandatory </span>
        )}
      </div>

        <div  className="second-input">
       
        <input
        className="inputs"
          type="role"
          {...register("role", { required: true })}
          placeholder="Your role?"
          list="role"
          required
        />{" "}


        <datalist id="role">
          <option>employee</option>
          <option>admin</option>
          <option>superAdmin</option>
        </datalist>
        </div>

        <div  className="second-input">
     
        <input
        className="inputs"
          type="gdo"
          {...register("gdo", { required: true })}
          placeholder="Which Gdo you belogs to?"
          list="gdo"
          required
        />{" "}
        <br />
        <br />
        <datalist id="gdo">
          <option>gdo1</option>
          <option>gdo2</option>
          <option>gdo3</option>
          <option>gdo4</option>
          <option>all</option>
        </datalist></div>

        <div  className="second-input">
        <input  className="inputs" type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </div>
      </form>
    </div></div>
  );
};
export default Signup;
