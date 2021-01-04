import React, {useState} from "react";
import "./CardLayout.css";
import plist from "../assests/PaintingList";
import {Cards} from './Cards';
const Cart = () => {

  const renderCard = (card, index) => {
      
    if(card.carted)
    {
        return (    
            <Cards index={index} title={card.title} artist={card.artist} currency={card.currency} price={card.price} desc={card.desc} cart={card.carted}></Cards> 
        );
    }
  };
  return        <div class="container">
                <div class="row">
                <div class="col-md-4"><div>{plist.map(renderCard)}</div></div>
                <div class="col-md-4"><div>{plist.map(renderCard)}</div></div>
                <div class="col-md-4"><div>{plist.map(renderCard)}</div></div>
                
                </div></div>;
};

export default Cart;