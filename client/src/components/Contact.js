import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Contact = () => {
  return (
    <>
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">Phone</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">Email</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">Address</div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="signin-form col-md-6">
            <h2 className="form-title">Get in Touch</h2>
            <br />
            <form>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input
                  id="txtName"
                  type="text"
                  className="form-control"
                  name="txtName"
                  placeholder="Your Name"
                  autoComplete="off"
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
                  placeholder="Your Email"
                  autoComplete="off"
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
                  placeholder="Your Phone"
                  autoComplete="off"
                />
              </div>
              <br />

              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-lock"></i>
                </span>
                <textarea className="form-control" cols="30" rows="6" placeholder="Message">

                </textarea>
              </div>
              <br />

              <button
                type="submit"
                className="btn btn-primary"
                id="btnSend"
                name="btnSend"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
