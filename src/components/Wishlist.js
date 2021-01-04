import React, {useState} from "react";

// import "./CardLayout.css";
import plist from "../assests/PaintingList";

import {Cards} from './Cards';
const Wishlist = () => {

  const renderCard = (card, index) => {
      
    if(card.wishlisted)
    {
        return (  
            
                <Cards index={index} title={card.title} artist={card.artist} currency={card.currency} price={card.price} desc={card.desc}></Cards> 
            
            
        );
    }
  };
  return <div className="grid">{plist.map(renderCard)}</div>;
};

export default Wishlist;