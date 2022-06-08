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
    <>
      <p className="title">Registration Form</p>

      <form className="sign" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" {...register("username",{ required: true })} />
        <br />
        <br />
        <label htmlFor="age">age</label>
        <input
          type="number"
          {...register("age")}
          placeholder="Enter age"
          required
          min="18"
          max="90"
        />
        <br />
        <br />
        <label htmlFor="skills">skills</label>
        <input type="text" {...register("skills")} />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" {...register("email", { required: true })} />
        <br />
        <br />
        {errors.email && (
          <span style={{ color: "red" }}>*Email* is mandatory </span>
        )}
        <label htmlFor="password">Password</label>
        <input type="password" {...register("password", { required: true })} />
        <br />
        <br />
        {errors.password && (
          <span style={{ color: "red" }}>*password* is mandatory </span>
        )}
        <label htmlFor="role">Choose Role</label>
        <input
          type="role"
          {...register("role", { required: true })}
          placeholder="Your role?"
          list="role"
          required
        />{" "}
        <br />
        <br />
        <datalist id="role">
          <option>employee</option>
          <option>admin</option>
          <option>superAdmin</option>
        </datalist>
        <label htmlFor="gdo">Choose GDO</label>
        <input
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
        </datalist>
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        <br />
        <br />
      </form>
    </>
  );
};
export default Signup;
