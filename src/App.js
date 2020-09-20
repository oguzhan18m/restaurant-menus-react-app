import React, { useState } from "react";
import "./App.css";
import CartSideBar from "./utilities/CartSideBar";
import IndirimliMenuler from "./components/IndirimliMenuler";
import KirmiziEtYemekleri from "./components/KirmiziEtYemekleri";
import SebzeliEtliYemekler from "./components/SebzeliEtliYemekler";
import BeyazEtYemekleri from "./components/BeyazEtYemekleri";
import Corba from "./components/Corba";
import Zeytinyaglilar from "./components/Zeytinyaglilar";
import Salata from "./components/Salata";
import YanLezzetler from "./components/YanLezzetler";
import Tatli from "./components/Tatli";
import GazsizIcecekler from "./components/GazsizIcecekler";
import GazliIcecekler from "./components/GazliIcecekler";
import SubMenuModal from "./utilities/SubMenuModal";

function App() {
   const [openSubMenu, setOpenSubMenu] = useState(false);
   const [openCart, setOpenCart] = useState(false);
   const [cart, setCart] = useState([{}]);

   const openSubMenuModal = (e) => {
      setOpenSubMenu(true);
   };

   const openCartSideBar = (e) => {
      setOpenCart(true);
   };

   const addToCart = (name, price) => {
      const pushedCart = [...cart];

      pushedCart.push({
         name: name,
         price: price,
      });

      setCart(pushedCart);
   };

   return (
      <div className="container">
         <div className="heading">Restaurant Menu</div>
         <button onClick={() => openCartSideBar()}>Siparis Detayi</button>

         {openSubMenu && (
            <div className="card-sm">
               <SubMenuModal
                  openSubMenu={openSubMenu}
                  setOpenSubMenu={setOpenSubMenu}
               />
            </div>
         )}

         {openCart && (
            <div className="card-sm">
               <CartSideBar
                  openCart={openCart}
                  setOpenCart={setOpenCart}
                  cart={cart}
               />
            </div>
         )}

         <div className="section-heading">İndirimli Menüler</div>
         <br />
         <img src="./images/4-kisilik-menu-etli-yaprak-sarma.jpg" />

         <div className="row col s12">
            <IndirimliMenuler openSubMenuModal={openSubMenuModal} />
         </div>
         <div className="section-heading">Kırmızı Et Yemekleri</div>
         <br />
         <div className="row col s12">
            <KirmiziEtYemekleri addToCart={addToCart} />
         </div>
         <div className="section-heading">Sebzeli/Etli Yemekler</div>
         <br />
         <div className="row col s12">
            <SebzeliEtliYemekler addToCart={addToCart} />
         </div>
         <div className="section-heading">Beyaz Et Yemekleri</div>
         <br />
         <div className="row col s12">
            <BeyazEtYemekleri addToCart={addToCart} />
         </div>
         <div className="section-heading">Çorbalar</div>
         <br />
         <div className="row col s12">
            <Corba addToCart={addToCart} />
         </div>
         <div className="section-heading">Zeytinyağlılar</div>
         <br />
         <div className="row col s12">
            <Zeytinyaglilar addToCart={addToCart} />
         </div>
         <div className="section-heading">Salatalar</div>
         <br />
         <div className="row col s12">
            <Salata addToCart={addToCart} />
         </div>
         <div className="section-heading">Yan Lezzetler</div>
         <br />
         <div className="row col s12">
            <YanLezzetler addToCart={addToCart} />
         </div>
         <div className="section-heading">Tatlılar</div>
         <br />
         <div className="row col s12">
            <Tatli addToCart={addToCart} />
         </div>
         <div className="section-heading">Gazsız İçecekler</div>
         <br />
         <div className="row col s12">
            <GazsizIcecekler addToCart={addToCart} />
         </div>
         <div className="section-heading">Gazlı İçecekler</div>
         <br />
         <div className="row col s12">
            <GazliIcecekler addToCart={addToCart} />
         </div>
      </div>
   );
}

export default App;
