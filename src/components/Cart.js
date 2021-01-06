import React, { useState } from "react";
import "./CardLayout.css";
import plist from "../assests/PaintingList";
import { Cards } from './Cards';
import Footer from "./Footer"
const Cart = () => {

  const renderCard = (card, index) => {

    if (card.carted) {
      return (
        <Cards 
        index={index}
          title={card.title}
          artist={card.artist}
          currency={card.currency}
          price={card.price}
          desc={card.desc}
          cart={card.carted}
          carted={card.carted}
          wishlisted={card.wishlisted}
        ></Cards>
      );
    }
  };
  return <div><div className="grid">{plist.map(renderCard)}</div>
    <Footer></Footer>
  </div>;



};

export default Cart;