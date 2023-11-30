import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut} from "firebase/auth";


export const Login = () => {
  return (
    <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray">
      <Link to="/login"> Log In</Link>
    </button>
  );
};

export const Logout = () => {
  const handleLog = () =>{
     signOut(auth).then(()=>alert("Logout success"))
     .catch((err)=>{
      console.log(err.message);
     })
  }
  return (
    <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray" onClick={handleLog}>
      <Link to="/"> Logout</Link>
    </button>
  );
};
