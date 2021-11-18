import React from "react";
import "./aboutus.css";
import Cat from "../../assets/img/cat.jpg";

function Aboutus() {
  return (
    <div className="aboutus__container" id="about">
      <div className="aboutus__info">
        <span>Our Team</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="team__imgs">
        <img className="team__img" src={Cat} />
        <img className="team__img" src={Cat} />
        <img className="team__img" src={Cat} />
        <img className="team__img" src={Cat} />
      </div>
    </div>
  );
}

export default Aboutus;
