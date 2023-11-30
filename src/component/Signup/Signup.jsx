import React, { useState } from "react";
import Input from "../Input/input";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

import styles from "./signup.module.css";

const Signup = () => {
const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg,setErrorMsg] = useState("");
  const [submitdisabled,setSubmitDisabled] = useState(false);


  const handleSubmission=()=>{
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Please Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitDisabled(true);
    createUserWithEmailAndPassword(auth,values.email,values.pass)
    .then(async (res)=>{
      setSubmitDisabled(false);

      const user = res.user;
      
      await updateProfile(user,{
        displayName:values.name,
      })
      console.log(user);
      navigate("/");
    })
    .catch(err=>{
      setSubmitDisabled(false);
      setErrorMsg(err.message);
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Sign Up</h1>
        <Input
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value}))
          }
        />
        <Input
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value}))
          }
        />
          {/* <Input
            label="Name"
            placeholder="Enter Your Name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value}))
            }
          /> */}

          <select className={styles.dropdown} onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value}))
            }>
            <option disabled selected>Select Role</option>
            <option className={styles.option} value="teacher">Teacher</option>
            <option className={styles.option} value="student">Student</option>
          </select>

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitdisabled}>Sign up</button>
          <p>
            Already have an account?
            <span>
              <Link to="/login"> Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
