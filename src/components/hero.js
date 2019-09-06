import React from "react"

import DDIcon from "../assets/dd.svg";
import Shape1 from "../assets/shape-01.svg";
import Shape2 from "../assets/shape-02.svg";
import Shape3 from "../assets/shape-03.svg";
import Shape4 from "../assets/shape-04.svg";

import "../styles/components/hero.scss"

const Hero = () => (
  <div className="hero">
    <div className="hero__shapes">
      <span className="hero__shape hero__shape--1"><Shape1/></span>
      <span className="hero__shape hero__shape--2"><Shape2/></span>
      <span className="hero__shape hero__shape--3"><Shape3/></span>
      <span className="hero__shape hero__shape--4"><Shape4/></span>
    </div>
    <div className="hero__inner">
      <DDIcon/>
    </div>
  </div>
)

export default Hero