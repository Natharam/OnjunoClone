import React, { useState, useEffect } from "react";
import Metal from "../components/Cards/Metal";
import Premium from "../components/Cards/Premium";
import Basic from "../components/Cards/Basic";
import "../css/Cards.css";

const Cards = () => {
  const [metal, setMetal] = useState(true);
  const [premium, setPremium] = useState(true);
  const [basic, setBasic] = useState(true);
  const [size, setSize] = useState(window.outerWidth);

  console.log(size);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.outerWidth);
      if (size <= 900) {
        if (metal && premium && basic) {
          setMetal(true);
          setPremium(false);
          setBasic(false);
        } else if (metal) {
          setMetal(true);
          setPremium(false);
          setBasic(false);
        } else if (premium) {
          setMetal(false);
          setPremium(true);
          setBasic(false);
        } else if (basic) {
          setMetal(false);
          setPremium(false);
          setBasic(true);
        }
      } else {
        setMetal(true);
        setPremium(true);
        setBasic(true);
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return;
  }, [size, metal, premium, basic]);

  const onMetalClick = () => {
    if (premium || basic) {
      setMetal(true);
      setPremium(false);
      setBasic(false);
    }
  };

  const onPremiumClick = () => {
    if (metal || basic) {
      setMetal(false);
      setPremium(true);
      setBasic(false);
    }
  };

  const onBasicClick = () => {
    if (metal || premium) {
      setMetal(false);
      setPremium(false);
      setBasic(true);
    }
  };

  return (
    <div className="card-elements">
      <div className="card-selesctor">
        <div onClick={onMetalClick} className="metal-selector">
          <p className="metal">METAL</p>
          <p className="metal-line"></p>
        </div>
        <div onClick={onPremiumClick} className="premium-selector">
          <p className="preium">PREMIUM</p>
        </div>
        <div onClick={onBasicClick} className="basic-selector">
          <p className="basic">BASIC</p>
        </div>
      </div>
      <div className="cards-select">
        {metal && <Metal />}
        {premium && <Premium />}
        {basic && <Basic />}
      </div>
    </div>
  );
};

export default Cards;
