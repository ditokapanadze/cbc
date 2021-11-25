import React, { useEffect, useRef } from "react";
import "./roadmap.css";
import useOnScreen from "../../hooks/useIntersection ";
function Roadmap() {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const isVisible = useOnScreen(ref);
  const isVisible1 = useOnScreen(ref1);
  const isVisible2 = useOnScreen(ref2);
  const isVisible3 = useOnScreen(ref3);
  const isVisible4 = useOnScreen(ref4);
  const isVisible5 = useOnScreen(ref5);
  const isVisible6 = useOnScreen(ref6);

  return (
    <div className="roadmap__container" id="roadmap">
      {/* <span>ROADMAP ACTIVATIONS</span>
      <br />
      <p style={{ fontSize: "24px", marginTop: "20px" }}>
        We’ve set up some goalposts for ourselves. Once we hit a target sell
        through percentage, we will begin to work on realizing the stated goal.
      </p> */}

      <div className="roadmap__left" style={{ width: "400px" }}>
        <p id="1" ref={ref} className={isVisible && "visible"}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </p>
        <p ref={ref1} className={isVisible1 && "visible"}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </p>
        <p ref={ref2} className={isVisible2 && "visible"}>
          aaContrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
        </p>
        <p ref={ref3} className={isVisible3 && "visible"}>
          ssss to popular belief, Lorem Ipsum is not simply random text. It has
          roots in a piece of classical Latin literature from 45 BC,
        </p>
      </div>
      <div className="line">
        <p className="roadmap__percent">
          {" "}
          <span>10%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "130px" }}>
          <span> 20%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "280px" }}>
          <span>40%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "420px" }}>
          <span>60%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "560px" }}>
          <span>80%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "710px" }}>
          <span> 90%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "840px" }}>
          <span style={{ fontSize: "17px" }}>100%</span>
        </p>
      </div>
      <div className="roadmap__right" style={{ width: "500px" }}>
        <p ref={ref4} className={isVisible4 && "visible"}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <p ref={ref5} className={isVisible5 && "visible"}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <p ref={ref6} className={isVisible6 && "visible"}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>

      {/* <ul className="roadmap__ul">
        <li className="roadmap__li">
          <span style={{ fontSize: "20px" }}>10% </span>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </li>

        <li className="roadmap__li">
          <span style={{ fontSize: "20px" }}>20% </span>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </li>
        <li className="roadmap__li">
          <span style={{ fontSize: "20px" }}>40% </span>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </li>
        <li className="roadmap__li">
          <span style={{ fontSize: "20px" }}>60% </span>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </li>
        <li className="roadmap__li">
          <span style={{ fontSize: "20px" }}>80% </span>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </li>
        <li className="roadmap__li">
          <span style={{ fontSize: "20px" }}>90% </span>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </li>
        <li className="roadmap__li">
          <span style={{ fontSize: "20px" }}>100% </span>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </li>
      </ul> */}
    </div>
  );
}

export default Roadmap;
