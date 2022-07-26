import React from "react";
import "./LastStep.css";

const LastStep = () => {
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
      <div className="step3">STEP 03/03</div>
      <a href="/ProfileCompletion" className="back_btn">
        Back
      </a>
      <div className="personal">Residency Info.</div>
      <div className="_heading">Complete You Profile!</div>
      <div className="_desc">
        For the purpose of industry regulation, your details are required.
      </div>
      <label className="_label">Bank Verification Number (BVN)</label>
      <input type="number" className="_input"></input>

      <button className="_button">Save and Continue</button>
    </>
  );
};

export default LastStep;
