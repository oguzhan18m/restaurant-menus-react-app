import React from "react";
import "./CartSideBar.css";
import Modal from "react-modal";

const CartSideBar = ({ cart, openCart, setOpenCart }) => {
   console.log(cart);
   return (
      <Modal isOpen={openCart} onRequestClose={() => setOpenCart(false)}>
         <div className="container-fluid">Sipariş Detayı</div>
         {cart.map((item) => {
            return (
               <div className="list">
                  <ul>
                     <li>
                        {item.name} - {item.price}
                     </li>
                  </ul>
               </div>
            );
         })}
         <button onClick={() => setOpenCart(false)}>İptal Et</button>
      </Modal>
   );
};

export default CartSideBar;
