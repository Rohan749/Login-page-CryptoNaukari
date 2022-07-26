import React from "react";
import "./JoinUs.css";
import { useNavigate } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

const JoinUs = () => {
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
      <div className="sign__in_option ">Already have an account? Sign in.</div>
      <nav className="heading">Join Us</nav>
      <div className="description">
        To begin this journey, tell us what type of account you’d be opening.
      </div>
      <div className="hoverOnIt">
        <button
          className="individual_btn"
          onClick={() => {
            navigate("/IndividualAccount");
          }}
        />
        <FaHouseUser className="userIcon" />
        <div className="individual">Individual</div>
        <div className="individual_description">
          Personal account to manage all you activities.
        </div>
      </div>
      <div className="hoverOnIt">
        <div className="business_box" />
        <div className="individual2">Business</div>
        <FaBriefcase className="businessIcon" />
        <div className="description2">
          Own or belong to a company, this is for you.
        </div>
      </div>
    </>
  );
};

export default JoinUs;
