import React from "react";

const DiyetMenuForm = ({
   diyetIndirimliAnaYemekler,
   indirimliMenuYanLezzetler1,
   indirimliMenuYanLezzetler2,
   indirimliMenuTatli,
   indirimliMenuIcecek,
}) => {
   return (
      <div className="container-fluid">
         <form>
            <div class="form-group">
               <label for="kirmizi-et">Ana Yemek Seciniz</label>
               <select class="form-control" id="diyet-option">
                  {diyetIndirimliAnaYemekler.map((yemek) => {
                     return (
                        <option value="yan-1">
                           {yemek.name} - +{yemek.price} TL
                        </option>
                     );
                  })}{" "}
               </select>

               <label for="yan-1">1.Yan Lezzetinizi Seciniz</label>
               <select class="form-control" id="yan-1">
                  {indirimliMenuYanLezzetler1.map((yemek) => {
                     return (
                        <option value="yan-1">
                           {yemek.name} +{yemek.price} TL
                        </option>
                     );
                  })}{" "}
               </select>

               <label for="yan-2">2.Yan Lezzetinizi Seciniz</label>
               <select class="form-control" id="yan-2">
                  {indirimliMenuYanLezzetler2.map((yemek) => {
                     return (
                        <option value="yan-1">
                           {yemek.name} +{yemek.price} TL
                        </option>
                     );
                  })}{" "}
               </select>

               <label for="tatli">Tatlinizi Seciniz</label>
               <select class="form-control" id="tatli">
                  {indirimliMenuTatli.map((yemek) => {
                     return (
                        <option value="yan-1">
                           {yemek.name} +{yemek.price} TL
                        </option>
                     );
                  })}
               </select>

               <label for="icecek">Iceceginizi Seciniz</label>
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

export default DiyetMenuForm;
