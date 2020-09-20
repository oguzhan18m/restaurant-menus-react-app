import React, { useState } from "react";

const BeyazEtMenuForm = ({
   beyazEtAnaYemekler,
   indirimliMenuYanLezzetler1,
   indirimliMenuYanLezzetler2,
   indirimliMenuTatli,
   indirimliMenuIcecek,
   setCart,
}) => {
   const handleBeyazEtYemek = (e) => {
      setCart(e.target.value);
      console.log(e.nativeEvent);
   };

   return (
      <div className="container-fluid">
         <form>
            <div class="form-group">
               <label for="kirmizi-et">Ana Yemek Seçiniz</label>
               <select
                  class="form-control"
                  id="kirmizi-et"
                  onClick={handleBeyazEtYemek}
               >
                  {beyazEtAnaYemekler.map((yemek) => {
                     return (
                        <option
                           dataValue={{
                              name: `${yemek.name}`,
                              price: `${yemek.price}`,
                           }}
                        >
                           {yemek.name} - +{yemek.price} TL
                        </option>
                     );
                  })}{" "}
               </select>

               <label for="yan-1">1.Yan Lezzetinizi Seçiniz</label>
               <select class="form-control" id="yan-1">
                  {indirimliMenuYanLezzetler1.map((yemek) => {
                     return (
                        <option value="yan-1">
                           {yemek.name} +{yemek.price} TL
                        </option>
                     );
                  })}{" "}
               </select>

               <label for="yan-2">2.Yan Lezzetinizi Seçiniz</label>
               <select class="form-control" id="yan-2">
                  {indirimliMenuYanLezzetler2.map((yemek) => {
                     return (
                        <option value="yan-1">
                           {yemek.name} +{yemek.price} TL
                        </option>
                     );
                  })}{" "}
               </select>

               <label for="tatli">Tatlınızı Seçiniz</label>
               <select class="form-control" id="tatli">
                  {indirimliMenuTatli.map((yemek) => {
                     return (
                        <option value="yan-1">
                           {yemek.name} +{yemek.price} TL
                        </option>
                     );
                  })}
               </select>

               <label for="icecek">İçeceğinizi Seçiniz</label>
               <select class="form-control" id="icecek">
                  {indirimliMenuIcecek.map((yemek) => {
                     return (
                        <option value="yan-1">
                           {yemek.name} +{yemek.price} TL
                        </option>
                     );
                  })}{" "}
               </select>
            </div>
         </form>
      </div>
   );
};

export default BeyazEtMenuForm;
