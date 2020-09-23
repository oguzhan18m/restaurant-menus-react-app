import React, { useState } from "react";
import "./Forms.css";

const SebzeliEtliIndirimliMenuAnaYemeklerForm = ({
   sebzeliEtliIndirimliMenuAnaYemekler,
   indirimliMenuYanLezzetler1,
   indirimliMenuYanLezzetler2,
   indirimliMenuTatli,
   indirimliMenuIcecek,
   setTumMenu,
}) => {
   const [anayemek, setAnaYemek] = useState({});
   const [yanLezzet1, setYanLezzet1] = useState({});
   const [yanLezzet2, setYanLezzet2] = useState({});
   const [tatli, setTatli] = useState({});
   const [icecek, setİcecek] = useState({});

   const handleBeyazEtYemek = (e) => {
      const arr = e.target.value;
      const n = arr.split("-")[0];
      var p = arr.slice("+", "T")[1];
      console.log(arr);
      console.log(n);
      console.log(p);

      setAnaYemek({
         name: n,
         price: p,
      });
      console.log(anayemek);
   };
   const handleYanLezzet1 = (e) => {
      const arr = e.target.value;
      const n = arr.split("-")[0];
      var p = arr.split("+")[1];

      const o = {
         name: n,
         price: p,
      };
      console.log(o);
      setYanLezzet1({
         name: n,
         price: p,
      });
   };
   const handleYanLezzet2 = (e) => {
      const arr = e.target.value;
      const n = arr.split("-")[0];
      var p = arr.split("+")[1];

      const o = {
         name: n,
         price: p,
      };
      console.log(o);
      setYanLezzet2({
         name: n,
         price: p,
      });
   };

   const handleTatli = (e) => {
      const arr = e.target.value;
      const n = arr.split("-")[0];
      var p = arr.split("+")[1];

      const o = {
         name: n,
         price: p,
      };
      console.log(o);
      setTatli({
         name: n,
         price: p,
      });
   };
   const handleIcecek = (e) => {
      const arr = e.target.value;
      const n = arr.split("-")[0];
      var p = arr.split("+")[1];

      const o = {
         name: n,
         price: p,
      };
      console.log(o);
      setİcecek({
         name: n,
         price: p,
      });
   };

   const secimlerTamamlandi = (e) => {
      e.preventDefault();
      const secim = [anayemek, yanLezzet1, yanLezzet2, tatli, icecek];
      setTumMenu(secim);
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
                  {sebzeliEtliIndirimliMenuAnaYemekler.map((yemek) => {
                     return (
                        <option
                           dataValue={{ name: yemek.name, price: yemek.price }}
                        >
                           {yemek.name}
                           {yemek.price ? `  +${yemek.price} TL` : ""}
                        </option>
                     );
                  })}{" "}
               </select>

               <label for="yan-1">1.Yan Lezzetinizi Seçiniz</label>
               <select
                  class="form-control"
                  id="yan-1"
                  onClick={handleYanLezzet1}
               >
                  {indirimliMenuYanLezzetler1.map((yemek) => {
                     return (
                        <option
                           dataValue={{ name: yemek.name, price: yemek.price }}
                        >
                           {yemek.name}
                           {yemek.price ? `  +${yemek.price} TL` : ""}
                        </option>
                     );
                  })}{" "}
               </select>

               <label for="yan-2">2.Yan Lezzetinizi Seçiniz</label>
               <select
                  class="form-control"
                  id="yan-2"
                  onClick={handleYanLezzet2}
               >
                  {indirimliMenuYanLezzetler2.map((yemek) => {
                     return (
                        <option
                           dataValue={{ name: yemek.name, price: yemek.price }}
                        >
                           {yemek.name}
                           {yemek.price ? `  +${yemek.price} TL` : ""}
                        </option>
                     );
                  })}{" "}
               </select>

               <label for="tatli">Tatlınızı Seçiniz</label>
               <select class="form-control" id="tatli" onClick={handleTatli}>
                  {indirimliMenuTatli.map((yemek) => {
                     return (
                        <option
                           dataValue={{ name: yemek.name, price: yemek.price }}
                        >
                           {yemek.name}
                           {yemek.price ? `  +${yemek.price} TL` : ""}
                        </option>
                     );
                  })}
               </select>

               <label for="icecek">İçeceğinizi Seçiniz</label>
               <select class="form-control" id="icecek" onClick={handleIcecek}>
                  {indirimliMenuIcecek.map((yemek) => {
                     return (
                        <option
                           dataValue={{ name: yemek.name, price: yemek.price }}
                        >
                           {yemek.name}
                           {yemek.price ? `  +${yemek.price} TL` : ""}
                        </option>
                     );
                  })}{" "}
               </select>
               <button
                  className="btn-secimi-tamamla"
                  onClick={(e) => secimlerTamamlandi(e)}
               >
                  Seçimini Tamamla
               </button>
            </div>
         </form>
      </div>
   );
};

export default SebzeliEtliIndirimliMenuAnaYemeklerForm;
