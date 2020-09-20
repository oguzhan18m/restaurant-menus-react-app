import React, { useRef, useState } from "react";
import "./App.css";
import { FaReceipt } from "react-icons/fa";
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
   //States
   const [openSubMenu, setOpenSubMenu] = useState(false);
   const [openCart, setOpenCart] = useState(false);
   const [cart, setCart] = useState([{}]);
   const [indirimliId, setIndirimliId] = useState("");

   console.log(cart);

   //Menu Option States
   // const [anayemek, setAnayemek] = useState("");
   // const [yanLezzet1, setYanLezzet1] = useState("");
   // const [yanLezzet2, setYanLezzet2] = useState("");
   // const [tatli, setTatli] = useState("");
   // const [icecek, setIcecek] = useState("");

   //References
   const indirimliSection = useRef(null);
   const kirmiziSection = useRef(null);
   const sebzeliSection = useRef(null);
   const beyazSection = useRef(null);
   const corbaSection = useRef(null);
   const zeytinyagliSection = useRef(null);
   const yanLezzetSection = useRef(null);
   const tatliSection = useRef(null);
   const gazsizSection = useRef(null);
   const gazliSection = useRef(null);
   const salataSection = useRef(null);

   //Scroll Functions
   const scrollToIndirimliSection = () =>
      window.scrollTo(0, indirimliSection.current.offsetTop);
   const scrollToKirmiziSection = () =>
      window.scrollTo(0, kirmiziSection.current.offsetTop);
   const scrollToSebzeliSection = () =>
      window.scrollTo(0, sebzeliSection.current.offsetTop);
   const scrollToBeyazSection = () =>
      window.scrollTo(0, beyazSection.current.offsetTop);
   const scrollToCorbaSection = () =>
      window.scrollTo(0, corbaSection.current.offsetTop);
   const scrollToZeytinyagliSection = () =>
      window.scrollTo(0, zeytinyagliSection.current.offsetTop);
   const scrollToYanLezzetSection = () =>
      window.scrollTo(0, yanLezzetSection.current.offsetTop);
   const scrollToTatliSection = () =>
      window.scrollTo(0, tatliSection.current.offsetTop);
   const scrollToGazsizSection = () =>
      window.scrollTo(0, gazsizSection.current.offsetTop);
   const scrollToGazliSection = () =>
      window.scrollTo(0, gazliSection.current.offsetTop);
   const scrollToSalataSection = () =>
      window.scrollTo(0, salataSection.current.offsetTop);

   const openSubMenuModal = (id) => {
      setIndirimliId(id);
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

   const clearCart = () => {
      setCart([]);
   };

   return (
      <div className="container">
         <div className="heading">SambaPos Restaurant</div>
         <button className="btn-siparis" onClick={() => openCartSideBar()}>
            <FaReceipt /> Siparişi Görüntüle{" "}
            {cart.length > 1 ? `(${cart.length - 1})` : ""}
         </button>
         <div className="section-list">
            <ul>
               <div className="heading">Menü</div>
               <li>
                  <a onClick={() => scrollToIndirimliSection()}>
                     İndirimli Menüler
                  </a>
               </li>
               <li>
                  <a onClick={() => scrollToKirmiziSection()}>
                     Kırmızı Et Yemekleri
                  </a>
               </li>
               <li>
                  <a onClick={() => scrollToSebzeliSection()}>
                     Sebzeli/Etli Yemekler
                  </a>
               </li>
               <li>
                  <a onClick={() => scrollToBeyazSection()}>
                     Beyaz Et Yemekleri
                  </a>
               </li>
               <li>
                  <a onClick={() => scrollToCorbaSection()}>Çorbalar</a>
               </li>
               <li>
                  <a onClick={() => scrollToZeytinyagliSection()}>
                     Zeytinyağlılar
                  </a>
               </li>
               <li>
                  <a onClick={() => scrollToSalataSection()}>Salatalar</a>
               </li>
               <li>
                  <a onClick={() => scrollToYanLezzetSection()}>
                     Yan Lezzetler
                  </a>
               </li>
               <li>
                  <a onClick={() => scrollToTatliSection()}>Tatlılar</a>
               </li>
               <li>
                  <a onClick={() => scrollToGazliSection()}>Gazlı İçeçekler</a>
               </li>
               <li>
                  <a onClick={() => scrollToGazsizSection()}>
                     Gazsız İçecekler
                  </a>
               </li>
            </ul>
         </div>

         {openSubMenu && (
            <div className="card-sm">
               <SubMenuModal
                  openSubMenu={openSubMenu}
                  setOpenSubMenu={setOpenSubMenu}
                  indirimliId={indirimliId}
                  setCart={setCart}
               />
            </div>
         )}

         {openCart && (
            <div className="card-sm">
               <CartSideBar
                  openCart={openCart}
                  setOpenCart={setOpenCart}
                  cart={cart}
                  clearCart={clearCart}
               />
            </div>
         )}

         <div ref={indirimliSection} className="section-heading">
            İndirimli Menüler
         </div>
         <br />

         <div className="row col s12">
            <IndirimliMenuler
               openSubMenuModal={openSubMenuModal}
               addToCart={addToCart}
            />
         </div>
         <div ref={kirmiziSection} className="section-heading">
            Kırmızı Et Yemekleri
         </div>
         <br />
         <div className="row col s12">
            <KirmiziEtYemekleri addToCart={addToCart} />
         </div>
         <div ref={sebzeliSection} className="section-heading">
            Sebzeli/Etli Yemekler
         </div>
         <br />
         <div className="row col s12">
            <SebzeliEtliYemekler addToCart={addToCart} />
         </div>
         <div ref={beyazSection} className="section-heading">
            Beyaz Et Yemekleri
         </div>
         <br />
         <div className="row col s12">
            <BeyazEtYemekleri addToCart={addToCart} />
         </div>
         <div ref={corbaSection} className="section-heading">
            Çorbalar
         </div>
         <br />
         <div className="row col s12">
            <Corba addToCart={addToCart} />
         </div>
         <div ref={zeytinyagliSection} className="section-heading">
            Zeytinyağlılar
         </div>
         <br />
         <div className="row col s12">
            <Zeytinyaglilar addToCart={addToCart} />
         </div>
         <div ref={salataSection} className="section-heading">
            Salatalar
         </div>
         <br />
         <div className="row col s12">
            <Salata addToCart={addToCart} />
         </div>
         <div ref={yanLezzetSection} className="section-heading">
            Yan Lezzetler
         </div>
         <br />
         <div className="row col s12">
            <YanLezzetler addToCart={addToCart} />
         </div>
         <div ref={tatliSection} className="section-heading">
            Tatlılar
         </div>
         <br />
         <div className="row col s12">
            <Tatli addToCart={addToCart} />
         </div>
         <div ref={gazsizSection} className="section-heading">
            Gazsız İçecekler
         </div>
         <br />
         <div className="row col s12">
            <GazsizIcecekler addToCart={addToCart} />
         </div>
         <div ref={gazliSection} className="section-heading">
            Gazlı İçecekler
         </div>
         <br />
         <div className="row col s12">
            <GazliIcecekler addToCart={addToCart} />
         </div>
      </div>
   );
}

export default App;
