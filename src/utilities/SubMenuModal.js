import React from "react";
import Modal from "react-modal";
import "./SubMenuModal.css";
import { data } from "../components/menus";
import BeyazEtMenuForm from "./forms/BeyazEtMenuForm";
import KirmiziEtAnaYemekForm from "./forms/KirmiziEtAnaYemekForm";
import SebzeliEtliIndirimMenuAnaYemeklerForm from "./forms/SebzeliEtliIndirimMenuAnaYemeklerForm";
import DiyetMenuForm from "./forms/DiyetMenuForm";
import CocaColaIndirimMenuForm from "./forms/CocaColaIndirimMenuForm";
import VejeteryanIndirimForm from "./forms/VejeteryanIndirimForm";

let kirmiziEtAnaYemekler = data.menus[1].items;
let beyazEtAnaYemekler = data.menus[2].items;
let sebzeliEtliIndirimliMenuAnaYemekler = data.menus[3].items;
let diyetIndirimliAnaYemekler = data.menus[4].items;
let vejeteryanIndirimliAnaYemekler = data.menus[5].items;
let cocacolaIndirimliMenuAnaYemekler = data.menus[6].items;
let indirimliMenuYanLezzetler1 = data.menus[7].items;
let indirimliMenuYanLezzetler2 = data.menus[8].items;
let indirimliMenuTatli = data.menus[9].items;
let indirimliMenuIcecek = data.menus[10].items;

const SubMenuModal = ({
   openSubMenu,
   setOpenSubMenu,
   indirimliId,
   setCart,
}) => {
   if (indirimliId === "kirmizi") {
      return (
         <Modal
            style={subMenuStyles}
            isOpen={openSubMenu}
            onRequestClose={() => setOpenSubMenu(false)}
         >
            <KirmiziEtAnaYemekForm
               kirmiziEtAnaYemekler={kirmiziEtAnaYemekler}
               indirimliMenuYanLezzetler1={indirimliMenuYanLezzetler1}
               indirimliMenuYanLezzetler2={indirimliMenuYanLezzetler2}
               indirimliMenuTatli={indirimliMenuTatli}
               indirimliMenuIcecek={indirimliMenuIcecek}
            />

            <button className="btn-kapat" onClick={() => setOpenSubMenu(false)}>
               Kapat
            </button>

            <button
               className="btn-siparise-ekle"
               onClick={() => setOpenSubMenu(false)}
            >
               Siparişe Ekle
            </button>
         </Modal>
      );
   } else if (indirimliId === "beyaz") {
      return (
         <Modal
            style={subMenuStyles}
            isOpen={openSubMenu}
            onRequestClose={() => setOpenSubMenu(false)}
         >
            <div className="container-fluid">
               <BeyazEtMenuForm
                  beyazEtAnaYemekler={beyazEtAnaYemekler}
                  indirimliMenuYanLezzetler1={indirimliMenuYanLezzetler1}
                  indirimliMenuYanLezzetler2={indirimliMenuYanLezzetler2}
                  indirimliMenuTatli={indirimliMenuTatli}
                  indirimliMenuIcecek={indirimliMenuIcecek}
                  setCart={setCart}
               />
            </div>
            <button className="btn-kapat" onClick={() => setOpenSubMenu(false)}>
               Kapat
            </button>
            <button
               className="btn-siparise-ekle"
               onClick={() => setOpenSubMenu(false)}
            >
               Siparişe Ekle
            </button>
         </Modal>
      );
   } else if (indirimliId === "sebzeli") {
      return (
         <Modal
            style={subMenuStyles}
            isOpen={openSubMenu}
            onRequestClose={() => setOpenSubMenu(false)}
         >
            <div className="container-fluid">
               <SebzeliEtliIndirimMenuAnaYemeklerForm
                  sebzeliEtliIndirimliMenuAnaYemekler={
                     sebzeliEtliIndirimliMenuAnaYemekler
                  }
                  indirimliMenuYanLezzetler1={indirimliMenuYanLezzetler1}
                  indirimliMenuYanLezzetler2={indirimliMenuYanLezzetler2}
                  indirimliMenuTatli={indirimliMenuTatli}
                  indirimliMenuIcecek={indirimliMenuIcecek}
               />
            </div>
            <button className="btn-kapat" onClick={() => setOpenSubMenu(false)}>
               Kapat
            </button>
            <button
               className="btn-siparise-ekle"
               onClick={() => setOpenSubMenu(false)}
            >
               Siparişe Ekle
            </button>
         </Modal>
      );
   } else if (indirimliId === "diyet") {
      return (
         <Modal
            style={subMenuStyles}
            isOpen={openSubMenu}
            onRequestClose={() => setOpenSubMenu(false)}
         >
            <div className="container-fluid">
               <DiyetMenuForm
                  diyetIndirimliAnaYemekler={diyetIndirimliAnaYemekler}
                  indirimliMenuYanLezzetler1={indirimliMenuYanLezzetler1}
                  indirimliMenuYanLezzetler2={indirimliMenuYanLezzetler2}
                  indirimliMenuTatli={indirimliMenuTatli}
                  indirimliMenuIcecek={indirimliMenuIcecek}
               />
            </div>
            <button className="btn-kapat" onClick={() => setOpenSubMenu(false)}>
               Kapat
            </button>
            <button
               className="btn-siparise-ekle"
               onClick={() => setOpenSubMenu(false)}
            >
               Siparişe Ekle
            </button>
         </Modal>
      );
   } else if (indirimliId === "coca-cola") {
      return (
         <Modal
            style={subMenuStyles}
            isOpen={openSubMenu}
            onRequestClose={() => setOpenSubMenu(false)}
         >
            <div className="container-fluid">
               <CocaColaIndirimMenuForm
                  cocacolaIndirimliMenuAnaYemekler={
                     cocacolaIndirimliMenuAnaYemekler
                  }
                  indirimliMenuYanLezzetler1={indirimliMenuYanLezzetler1}
                  indirimliMenuYanLezzetler2={indirimliMenuYanLezzetler2}
                  indirimliMenuTatli={indirimliMenuTatli}
                  indirimliMenuIcecek={indirimliMenuIcecek}
               />
            </div>
            <button className="btn-kapat" onClick={() => setOpenSubMenu(false)}>
               Kapat
            </button>
            <button
               className="btn-siparise-ekle"
               onClick={() => setOpenSubMenu(false)}
            >
               Siparişe Ekle
            </button>
         </Modal>
      );
   } else if (indirimliId === "vejeteryan") {
      return (
         <Modal
            style={subMenuStyles}
            isOpen={openSubMenu}
            onRequestClose={() => setOpenSubMenu(false)}
         >
            <div className="container-fluid">
               <VejeteryanIndirimForm
                  vejeteryanIndirimliAnaYemekler={
                     vejeteryanIndirimliAnaYemekler
                  }
                  indirimliMenuYanLezzetler1={indirimliMenuYanLezzetler1}
                  indirimliMenuYanLezzetler2={indirimliMenuYanLezzetler2}
                  indirimliMenuTatli={indirimliMenuTatli}
                  indirimliMenuIcecek={indirimliMenuIcecek}
               />
            </div>
            <button className="btn-kapat" onClick={() => setOpenSubMenu(false)}>
               Kapat
            </button>
            <button
               className="btn-siparise-ekle"
               onClick={() => setOpenSubMenu(false)}
            >
               Siparişe Ekle
            </button>
         </Modal>
      );
   }
};

const subMenuStyles = {
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

export default SubMenuModal;
