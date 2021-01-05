import React, { useState } from "react";
import "./CardLayout.css";
import plist from "../assests/PaintingList";
import { Cards } from './Cards';
import Footer from "./Footer";
const AllArts = () => {

  const renderCard = (card, index) => {
    return (
      <Cards index={index} title={card.title} artist={card.artist} currency={card.currency} price={card.price} desc={card.desc} cart={card.carted}></Cards>
    );
  };
  return <div>
    <div className="grid">{plist.map(renderCard)}</div>
    <Footer></Footer>
  </div>;
};

export default AllArts;