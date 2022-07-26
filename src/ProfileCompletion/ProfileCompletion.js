import React from "react";
import "./ProfileCompletion.css";
import { useNavigate } from "react-router-dom";

const ProfileCompletion = () => {
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
      <div className="step2">STEP 02/03</div>
      <a href="/IndividualAccount" className="back_btn">
        Back
      </a>
      <div className="resident">Residency Info.</div>
      <div className="prof_heading">Complete You Profile!</div>
      <div className="prof_desc">
        For the purpose of industry regulation, your details are required.
      </div>
      <label className="name_label">Phone number</label>
      <input type="number" className="name_input"></input>

      <label className="email_label">Your Address*</label>
      <input className="email_input" placeholder="Please enter address"></input>

      <label className="pass_label">Country of residence</label>
      <input className="pass_input" placeholder="Please select" />

      <button
        className="reg_button"
        onClick={() => {
          navigate("/LastStep");
        }}
      >
        Save and Continue
      </button>
    </>
  );
};

export default ProfileCompletion;
