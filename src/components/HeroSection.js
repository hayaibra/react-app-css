import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";

const HeroSection = () => {
  return (
    <div className="hero">
      <video
        src={require("../videos/video-1.mp4")}
        loop
        muted
        autoPlay
        alt=""
      />
      <div className="container">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for ?</p>
        <div className="hero-btns">
          <Button
            buttonStyle="btn-outline"
            className="btn"
            buttonSize="btn-large"
          >
            GET STARTED
          </Button>
          <Button
            buttonStyle="btn-primary"
            className="btn"
            buttonSize="btn-large"
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
