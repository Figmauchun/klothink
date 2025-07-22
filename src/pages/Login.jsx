import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { TiKeyOutline } from "react-icons/ti";
import { IoEyeOutline } from "react-icons/io5";

function Login() {
  const [adminLogin, setAdminLogin] = useState();
  const [adminParol, setAdminParol] = useState();
  const Checking = () => {
    if (adminLogin == "klothink" && adminParol == "12345") {
      window.location.assign("/add");
    } else {
      alert("Login yoki parol xato!");
    }
  };
  return (
    <div className="login">
      <div className="login-box">
        <h2>Login</h2>
        <div className="login-btn">
          <form className="">
            <div className="Email-input">
              <CiMail className="i" />
              <input
                value={adminLogin}
                onChange={(e) => setAdminLogin(e.target.value)}
                className="iemail"
                placeholder="Login"
                type="text"
              />
            </div>
            <div className="Pass-input">
              <TiKeyOutline className="i" />
              <input
                value={adminParol}
                onChange={(e) => setAdminParol(e.target.value)}
                className="ipass"
                placeholder="Password"
                type="text"
              />
              <IoEyeOutline className="i" />
            </div>
          </form>
        </div>
        <button onClick={Checking} className="ibtn">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
