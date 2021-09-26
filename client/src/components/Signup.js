import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    txtName: "",
    txtEmail: "",
    txtPhone: "",
    txtProfession: "",
    txtPassword: "",
    txtConfirmPassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const insertData = async (e) => {
    e.preventDefault();

    const {
      txtName,
      txtEmail,
      txtPhone,
      txtProfession,
      txtPassword,
      txtConfirmPassword,
    } = user;

    window.alert(txtName);

    const res = await fetch("/registration", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: txtName,
        email: txtEmail,
        phone: txtPhone,
        work: txtProfession,
        password: txtPassword,
        cpassword: txtConfirmPassword,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invaid");
    } else {
      window.alert(data.error);
      history.push("signin");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5 col-md-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <br />
              <form method="POST">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user"></i>
                  </span>
                  <input
                    id="txtName"
                    type="text"
                    className="form-control"
                    name="txtName"
                    placeholder="Name"
                    autoComplete="off"
                    value={user.txtName}
                    onChange={handleInputs}
                  />
                </div>
                <br />
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-lock"></i>
                  </span>
                  <input
                    id="txtEmail"
                    type="email"
                    className="form-control"
                    name="txtEmail"
                    placeholder="Email"
                    autoComplete="off"
                    value={user.txtEmail}
                    onChange={handleInputs}
                  />
                </div>
                <br />
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-lock"></i>
                  </span>
                  <input
                    id="txtPhone"
                    type="phone"
                    className="form-control"
                    name="txtPhone"
                    placeholder="Phone"
                    autoComplete="off"
                    value={user.txtPhone}
                    onChange={handleInputs}
                  />
                </div>
                <br />
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-lock"></i>
                  </span>
                  <input
                    id="txtProfession"
                    type="text"
                    className="form-control"
                    name="txtProfession"
                    placeholder="Profession"
                    autoComplete="off"
                    value={user.txtProfession}
                    onChange={handleInputs}
                  />
                </div>
                <br />
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-lock"></i>
                  </span>
                  <input
                    id="txtPassword"
                    type="password"
                    className="form-control"
                    name="txtPassword"
                    placeholder="Password"
                    autoComplete="off"
                    value={user.txtPassword}
                    onChange={handleInputs}
                  />
                </div>
                <br />
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-lock"></i>
                  </span>
                  <input
                    id="txtConfirmPassword"
                    type="password"
                    className="form-control"
                    name="txtConfirmPassword"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    value={user.txtConfirmPassword}
                    onChange={handleInputs}
                  />
                </div>
                <br />

                <button
                  type="submit"
                  className="btn btn-primary"
                  id="btnSignup"
                  name="btnSignup"
                  onClick={insertData}
                >
                  Register
                </button>

                <NavLink aria-current="page" to="signin">
                  <button
                    type="button"
                    className="btn btn-success ml-1"
                    id="btnSignin"
                    name="btnSignin"
                  >
                    Login
                  </button>
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
