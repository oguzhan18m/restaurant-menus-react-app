import React from "react";
import "../App.css";
import data from "../menus.json";

let zeytinyaglilar = data.menus[0].items[5].items;

const Zeytinyaglilar = ({ addToCart }) => {
   return zeytinyaglilar.map((item, i) => {
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
export default Zeytinyaglilar;
