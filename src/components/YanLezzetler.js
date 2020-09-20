import React from "react";
import "../App.css";
import { data } from "./menus";

let yanLezzetler = data.menus[0].items[7].items;

const YanLezzetler = ({ addToCart }) => {
   return yanLezzetler.map((item, i) => {
      return (
         <div className="card" key={i}>
            <img src={item.image} className="card-img-top" alt={item.caption} />
            <div className="card-body ">
               <h5 className="card-title">{item.name}</h5>
               <p className="card-text">{item.price} TL</p>
               <button
                  className="btn"
                  onClick={() => addToCart(item.name, item.price)}
               >
                  Siparişine Ekle
               </button>
            </div>
         </div>
      );
   });
};

export default YanLezzetler;
