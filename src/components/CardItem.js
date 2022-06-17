import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const CardItem = (props) => {
  return (
    <li className="card-item">
      <Link className="card" to={props.path}>
        <div className="image-card">
          <img src={props.src} alt="" />
        </div>
        <div className="card-text" card-label={props.label}>
          <h5>{props.text}</h5>
        </div>
      </Link>
    </li>
  );
};

export default CardItem;
