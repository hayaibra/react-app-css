import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Informations from "./Informations";

const Cards = () => {
  const [cardInfo1, setCardInfo1] = React.useState(Informations.data1);

  const [cardInfo2, setCardInfo2] = React.useState(Informations.data2);

  const info1 = cardInfo1.map((card) => <CardItem key={card.id} {...card} />);

  const info2 = cardInfo2.map((card) => <CardItem key={card.id} {...card} />);

  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="container">
        <ul className="first-group-card">{info1}</ul>
        <ul className="second-group-card">{info2}</ul>
      </div>
    </div>
  );
};

export default Cards;
