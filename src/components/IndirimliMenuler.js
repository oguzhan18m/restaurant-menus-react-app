import React from "react";
import "../App.css";
import { data } from "./menus";

let indirimliMenu = data.menus[0].items[0].items;

const IndirimliMenuler = ({ openSubMenuModal, addToCart }) => {
   return indirimliMenu.map((item, i) => {
      return (
         <div className="card" key={i}>
            <img src={item.image} className="card-img-top" alt={item.caption} />
            <div className="card-body ">
               <h5 className="card-title">{item.name}</h5>
               <p className="card-text">{item.price} TL</p>
               {item.subMenus ? (
                  <button
                     className="btn-menu-sec"
                     onClick={() => openSubMenuModal(item.id)}
                  >
                     Menü İçeriğini Seç
                  </button>
               ) : (
                  <button
                     className="btn"
                     onClick={() => addToCart(item.name, item.price)}
                  >
                     Siparişine Ekle
                  </button>
               )}
            </div>
         </div>
      );
   });
};

export default IndirimliMenuler;
