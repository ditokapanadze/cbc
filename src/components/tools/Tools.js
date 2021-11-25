import React from "react";
import "./tools.css";
import { FaDiscord } from "react-icons/fa";

function Tools() {
  return (
    <div className="aboutus__container tools__container">
      <div className="aboutus__info" style={{ marginBottom: "40px" }}>
        <span>CMMUNITY TOOLS</span>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <a href="https://discord.com/" target="_blank">
          <button className="discord__btn">
            <p>Join Discord</p> <FaDiscord className="discord__logo" />{" "}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Tools;
