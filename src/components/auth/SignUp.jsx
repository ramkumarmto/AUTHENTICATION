import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import Button from "../reusable/Button";
import Card from "../reusable/Card";

function SignUp() {
  const signUphandler = () => {
    alert("registred successfully!");
  };
  return (
    <div className="auth-container">
      <Card className="auth_inner_container">
        <h2>Sign Up</h2>
        <div>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="number" placeholder="Mobile" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <input type="text" placeholder="Address" />
        </div>
       
        <div>
          {/* <button>Sign Up</button> */}
          <Button onClick={signUphandler} btnName="Sign Up" />
        </div>
        <div>
          <p>
            Allready have Account ? <Link to="/signin">Sign In</Link>
          </p>
        </div>
        {/* <div>
        </div> */}
      </Card>
    </div>
  );
}

export default SignUp;
