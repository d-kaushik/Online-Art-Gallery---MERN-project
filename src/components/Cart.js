import React from "react";
import "./CardLayout.css";
import plist from "../assests/PaintingList";
import { Cards } from "./Cards";
import Footer from "./Footer";
import { Link } from 'react-router-dom'

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
          carted={card.carted}
          wishlisted={card.wishlisted}
          cart={true}
          wishlist={false}
          dashboard={false}
          explore={false}
        ></Cards>
      );
    }
  };
  return (
    <div>
      <aside>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
            marginRight: "30px",
          }}
        >
          {" "}
          <button type="submit" class="btn btn-outline-primary">
          <Link to="/checkout">BUY</Link>
          </button>
        </div>
      </aside>
      <div className="grid">{plist.map(renderCard)}</div>
      <div style={{ margin: "0 auto" }}></div>
      <Footer></Footer>
    </div>
  );
};

export default Cart;