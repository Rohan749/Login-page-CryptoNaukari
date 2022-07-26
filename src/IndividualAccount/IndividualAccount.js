import React from "react";
import { useNavigate } from "react-router-dom";
import "./IndividualAccount.css";
import { FcGoogle } from "react-icons/fc";

const IndividualAccount = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="frame1" />
      <div className="oasis">Oasis.</div>
      <div className="details">
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software.
      </div>
      <nav className="speaker">Vincent Obi</nav>
      <div className="step">STEP 01/03</div>
      <a href="/" className="back_btn">
        Back
      </a>
      <div className="personal">Personal Info</div>
      <div className="reg_heading">Register Indiviaual Account</div>
      <div className="reg_desc">
        For the purpose of industry regulation, your details are required.
      </div>
      <label className="name_label">Your fullname*</label>
      <input className="name_input"></input>

      <label className="email_label">Email Address*</label>
      <input className="email_input"></input>

      <label className="pass_label">Create Password*</label>
      <input className="pass_input"></input>
      <button className="show_pass">Show</button>

      <button
        className="reg_button"
        onClick={() => {
          navigate("/ProfileCompletion");
        }}
      >
        Register Account
      </button>
      <div className="or">or</div>
      <input type="checkbox" className="inputcheck" />
      <div className="terms">I agree to the terms and conditions</div>
      <button className="google_btn">Register with Google</button>
      <FcGoogle className="gIcon" />
    </>
  );
};

export default IndividualAccount;
