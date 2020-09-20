import React from "react";
import "./CartSideBar.css";
import { FaReceipt } from "react-icons/fa";
import Modal from "react-modal";

const CartSideBar = ({ cart, openCart, setOpenCart, clearCart }) => {
   console.log(cart);
   return (
      <Modal
         isOpen={openCart}
         onRequestClose={() => setOpenCart(false)}
         style={customStyles}
      >
         <h3 className="section-heading">
            {" "}
            <FaReceipt /> Sipariş Detayı
         </h3>
         {cart.map((item) => {
            return (
               <div className="list">
                  <div className="list-items">
                     <div className="cart-row">
                        <div className="list-item-name">{item.name}</div>
                        <div className="list-item-price">{item.price}</div>
                     </div>
                  </div>
               </div>
            );
         })}
         <br />
         <div className="btn-row">
            <button className="btn-kapat" onClick={() => setOpenCart(false)}>
               Kapat
            </button>
            <button className="btn-temizle" onClick={() => clearCart()}>
               Temizle
            </button>
            <button className="btn-tamamla">Siparişi Tamamla</button>
         </div>
      </Modal>
   );
};

const customStyles = {
   content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: "3px",
   },
};

export default CartSideBar;
