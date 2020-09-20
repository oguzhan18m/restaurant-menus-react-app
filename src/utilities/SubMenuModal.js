import React from "react";
import Modal from "react-modal";
import data from "../menus.json";
import BeyazEtMenuForm from "./forms/BeyazEtMenuForm";
import KirmiziEtAnaYemekForm from "./forms/KirmiziEtAnaYemekForm";
import SebzeliEtliIndirimMenuAnaYemeklerForm from "./forms/SebzeliEtliIndirimMenuAnaYemeklerForm";
import DiyetMenuForm from "./forms/DiyetMenuForm";
import CocaColaIndirimMenuForm from "./forms/CocaColaIndirimMenuForm";
import VejeteryanIndirimForm from "./forms/VejeteryanIndirimForm";

let menus = data.menus[0].items[0].items;
console.log(menus);

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

const SubMenuModal = ({ openSubMenu, setOpenSubMenu }) => {
   return (
      <>
         {menus.map((item) => {
            if (item.name === "Kırmızı Et Menü") {
               console.log(item.name);
               return (
                  <Modal
                     isOpen={openSubMenu}
                     onRequestClose={() => setOpenSubMenu(false)}
                  >
                     <div className="container-fluid">
                        <KirmiziEtAnaYemekForm
                           kirmiziEtAnaYemekler={kirmiziEtAnaYemekler}
                           indirimliMenuYanLezzetler1={
                              indirimliMenuYanLezzetler1
                           }
                           indirimliMenuYanLezzetler2={
                              indirimliMenuYanLezzetler2
                           }
                           indirimliMenuTatli={indirimliMenuTatli}
                           indirimliMenuIcecek={indirimliMenuIcecek}
                        />
                     </div>
                     <button onClick={() => setOpenSubMenu(false)}>
                        İptal Et
                     </button>
                  </Modal>
               );
            } else if (item.name === "Beyaz Et Menü") {
               return (
                  <Modal
                     isOpen={openSubMenu}
                     onRequestClose={() => setOpenSubMenu(false)}
                  >
                     <div className="container-fluid">
                        <BeyazEtMenuForm
                           beyazEtAnaYemekler={beyazEtAnaYemekler}
                           indirimliMenuYanLezzetler1={
                              indirimliMenuYanLezzetler1
                           }
                           indirimliMenuYanLezzetler2={
                              indirimliMenuYanLezzetler2
                           }
                           indirimliMenuTatli={indirimliMenuTatli}
                           indirimliMenuIcecek={indirimliMenuIcecek}
                        />
                     </div>
                     <button onClick={() => setOpenSubMenu(false)}>
                        Close
                     </button>
                  </Modal>
               );
            } else if (item.name === "Sebzeli / Etli Menü") {
               return (
                  <Modal
                     isOpen={openSubMenu}
                     onRequestClose={() => setOpenSubMenu(false)}
                  >
                     <div className="container-fluid">
                        <SebzeliEtliIndirimMenuAnaYemeklerForm
                           sebzeliEtliIndirimliMenuAnaYemekler={
                              sebzeliEtliIndirimliMenuAnaYemekler
                           }
                           indirimliMenuYanLezzetler1={
                              indirimliMenuYanLezzetler1
                           }
                           indirimliMenuYanLezzetler2={
                              indirimliMenuYanLezzetler2
                           }
                           indirimliMenuTatli={indirimliMenuTatli}
                           indirimliMenuIcecek={indirimliMenuIcecek}
                        />
                     </div>
                     <button onClick={() => setOpenSubMenu(false)}>
                        Close
                     </button>
                  </Modal>
               );
            } else if (item.name === "Diyet Menü") {
               return (
                  <Modal
                     isOpen={openSubMenu}
                     onRequestClose={() => setOpenSubMenu(false)}
                  >
                     <div className="container-fluid">
                        <DiyetMenuForm
                           diyetIndirimliAnaYemekler={diyetIndirimliAnaYemekler}
                           indirimliMenuYanLezzetler1={
                              indirimliMenuYanLezzetler1
                           }
                           indirimliMenuYanLezzetler2={
                              indirimliMenuYanLezzetler2
                           }
                           indirimliMenuTatli={indirimliMenuTatli}
                           indirimliMenuIcecek={indirimliMenuIcecek}
                        />
                     </div>
                  </Modal>
               );
            } else if (item.name === "Coca-Cola Menü") {
               return (
                  <Modal
                     isOpen={openSubMenu}
                     onRequestClose={() => setOpenSubMenu(false)}
                  >
                     <div className="container-fluid">
                        <CocaColaIndirimMenuForm
                           cocacolaIndirimliMenuAnaYemekler={
                              cocacolaIndirimliMenuAnaYemekler
                           }
                           indirimliMenuYanLezzetler1={
                              indirimliMenuYanLezzetler1
                           }
                           indirimliMenuYanLezzetler2={
                              indirimliMenuYanLezzetler2
                           }
                           indirimliMenuTatli={indirimliMenuTatli}
                           indirimliMenuIcecek={indirimliMenuIcecek}
                        />
                     </div>
                  </Modal>
               );
            } else if (item.name === "Vejetaryen Menü") {
               return (
                  <Modal
                     isOpen={openSubMenu}
                     onRequestClose={() => setOpenSubMenu(false)}
                  >
                     <div className="container-fluid">
                        <VejeteryanIndirimForm
                           vejeteryanIndirimliAnaYemekler={
                              vejeteryanIndirimliAnaYemekler
                           }
                           indirimliMenuYanLezzetler1={
                              indirimliMenuYanLezzetler1
                           }
                           indirimliMenuYanLezzetler2={
                              indirimliMenuYanLezzetler2
                           }
                           indirimliMenuTatli={indirimliMenuTatli}
                           indirimliMenuIcecek={indirimliMenuIcecek}
                        />
                     </div>
                  </Modal>
               );
            }
         })}
      </>
   );
};

export default SubMenuModal;
