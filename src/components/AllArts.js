import React, {useState} from "react";
import "./CardLayout.css";
import plist from "../assests/PaintingList";
import {Cards} from './Cards';
const AllArts = () => {

  const renderCard = (card, index) => {
       return (    
            <Cards index={index} title={card.title} artist={card.artist} currency={card.currency} price={card.price} desc={card.desc} cart={card.carted}></Cards> 
        );
  };
  return <div className="grid">{plist.map(renderCard)}</div>;
};

export default AllArts;