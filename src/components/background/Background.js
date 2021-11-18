import "./background.css";
import React, { useLayoutEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function Background() {
  const [width, height] = useWindowSize();
  console.log(width);
  return (
    <div className="backdground__container">
      <div className="background__text">
        <p>Collect</p>
        <p
          style={width > 620 ? { textIndent: "50px" } : { textIndent: "30px" }}
        >
          Super Rare
        </p>
        <p
          style={width > 620 ? { textIndent: "150px" } : { textIndent: "90px" }}
        >
          Digital
        </p>
        <p
          style={
            width > 620 ? { textIndent: "250px" } : { textIndent: "140px" }
          }
        >
          Artworks
        </p>
      </div>
    </div>
  );
}

export default Background;
