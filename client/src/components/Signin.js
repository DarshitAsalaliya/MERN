import React from "react";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <section className="signin">
        <div className="container mt-5 col-md-5">
          <div className="signin-content">
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <br />
              <form>
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
                  />
                </div>
                <br />

                <button
                  type="submit"
                  className="btn btn-primary"
                  id="btnSignin"
                  name="btnSignin"
                >
                  Sign In
                </button>

                <NavLink aria-current="page" to="signup">
                  <button
                    type="button"
                    className="btn btn-success ml-1"
                    id="btnSignup"
                    name="btnSignup"
                  >
                    Register
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

export default Signin;
