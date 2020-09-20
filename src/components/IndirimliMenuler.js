import React from "react";
import "../App.css";
import data from "../menus.json";

let indirimliMenu = data.menus[0].items[0].items;

console.log(indirimliMenu);

const IndirimliMenuler = ({ openSubMenuModal }) => {
   return indirimliMenu.map((item, i) => {
      return (
         <div className="card" key={i}>
            <img src={item.image} className="card-img-top" alt={item.caption} />
            <div className="card-body ">
               <h5 className="card-title">{item.name}</h5>
               <p className="card-text">{item.price} TL</p>
               <button className="btn" onClick={(e) => openSubMenuModal()}>
                  Menü İçeriğini Seç
               </button>
            </div>
         </div>
      );
   });
};

export default IndirimliMenuler;
