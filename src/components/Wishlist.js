import React, {useState} from "react";
import Footer from "./Footer"

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
  return <div><div className="grid">{plist.map(renderCard)}</div>
  <Footer></Footer>
</div>;
};

export default Wishlist;