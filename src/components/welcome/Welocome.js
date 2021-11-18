import React from "react";
import "./welcome.css";
import Cat from "../../assets/img/cat.jpg";
function Welocome() {
  return (
    <div className="aboutus__container">
      <div className="aboutus__info">
        <span>WELCOME TO THE CBC</span>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <img className="welcome__img" src={Cat} />
      </div>
    </div>
  );
}

export default Welocome;
