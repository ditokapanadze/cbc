import React, { useState } from "react";
import "./faq.css";
function Faq() {
  return (
    <div className="faq">
      <p style={{ fontSize: "34px", marginBottom: "20px" }}>
        Frequently asked questions
      </p>
      <div className="faq__container">
        <div style={{ flex: "1", marginRight: "30px" }}>
          <div className="faq__item">
            <p className="faq__title">Where does it come from?</p>
            <p className="faq__content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia
            </p>
          </div>
          <div className="faq__item">
            <p className="faq__title">Where does it come from?</p>
            <p className="faq__content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <div className="faq__item">
            <p className="faq__title">Where does it come from?</p>
            <p className="faq__content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <div className="faq__item">
            <p className="faq__title">Where does it come from?</p>
            <p className="faq__content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur,
            </p>
          </div>
          <div className="faq__item">
            <p className="faq__title">Where does it come from?</p>
            <p className="faq__content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
