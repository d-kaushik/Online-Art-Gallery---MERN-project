import React, {useState} from "react";
import "./CardLayout.css";
import plist1 from "../assests/MyPaintingList";
import plist from "../assests/PaintingList";
import {Cards} from './Cards';
const Cart = () => {

  const renderCard = (card, index) => {
      
    if(card.carted)
    {
        return (    
            <Cards 
            index={index}
          title={card.title}
          artist={card.artist}
          
            ></Cards> 
        );
    }
  };
  return <div className="grid">{plist.map(renderCard)}</div>;
               
                
                
};

export default Cart;