import React from "react";
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import axios from "axios";


const SignupSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(' please Enter username'),
  age:Yup.number().required('Please provide your age'),
  skills: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please provide your skills'),
  email: Yup.string().email('Invalid email').required(' Email is mandatory'),
  password:Yup
  .string()
  .required("Please Enter your password")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  roleid: Yup.string().required("role sholud be choosen!"),
  gdoid: Yup.string().required("gdo sholud be choosen!")
});


const Signup = () => {
  

return(
<div className="main">
<div className="sub-main2">  

<Formik className="sign"
       initialValues={{
         username: '',
         age: '',
         skills:'',
         email: '',
         password:'',
         roleid:'',
         gdoid:''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
          console.log(values);
          axios({
            method: "post",
            url: "/signup",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            data: {
              username: values.username,
              age: values.age,
              skills: values.skills,
              email: values.email,
              password: values.password,
              roleid:values.roleid,
              gdoid:values.gdoid,
            },
          }).then((response) => {
            console.log(JSON.stringify(response.data));
            alert(`${JSON.stringify(response.data)}`);
          });
        }}
      >      
  
       {({ errors, touched }) => (
         <Form>

<div>
  
  <h1>Signup form</h1>
  </div> 

<div  className="second-input" >
           <Field className="inputs" name="username"  placeholder="username"/>
           {errors.username && touched.username ? (
             <div>{errors.username}</div>
           ) : null}   </div>

<div  className="second-input"  >
           <Field  placeholder="Enter your age" className="inputs" name="age" />
           {errors.age && touched.age ? <div>{errors.age}</div> : null}    

           </div>

        <div  className="second-input"  >
        <Field   className="inputs"  placeholder="skills" name="skills" />  
        {errors.skills && touched.skills ? <div>{errors.skills}</div> : null}    
        </div>


        <div  className="second-input"  >
           <Field  className="inputs"  placeholder="email" name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
 </div>

           <div  className="second-input" >
           <Field   className="inputs"  name="password" type="text"  placeholder="password"/>
           {errors.password && touched.password ? <div>{errors.password}</div> : null}
           </div>

            <div  className="second-input">
          <Field  className="inputs" as="select" name="roleid" id="role">
    <option value="" label="select your role">select your role</option>
   <option value="1">employee</option>
   <option value="2">admin</option>   <option value="3">superAdmin</option> </Field>
  
           {errors.role && touched.role ? <div>{errors.role}</div> : null}</div>


 <div  className="second-input">
 
 <Field  className="inputs" as="select" name="gdoid" id="gdo">   
  <option value="">To which gdo you belongs to?</option>
  <option value="1">gdo1</option>
   <option value="2">gdo2</option>
  <option value="3">gdo3</option>
    <option value="4">gdo4</option>
   <option value="5">all</option>  </Field>
        {errors.gdo && touched.gdo ? <div>{errors.gdo}</div> : null}
 </div>

 
<div  className="second-input">
 <input  className="inputs" type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
           </div>
         </Form>
       )}
     </Formik></div></div>
     )};
export default Signup;
