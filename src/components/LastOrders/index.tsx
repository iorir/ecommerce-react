import React from "react";
export interface IData {
  id: string;
  sirket_id: string;
  must_id: string;
  urun_id: string;
  siparis_bilgisi: string;
  eklenme_tarihi: Date;
  id_sirket: string;
  id_category: string;
  urun_adi: string;
  kisa_aciklama: string;
  aciklama: string;
  tarih: Date;
  fiyat: string;
  satis_tipi: string;
  kampanya: string;
  kampanya_baslik: string;
  kampanya_detay: string;
  adi: string;
  normal: string;
  thumb: string;
}
interface ILastOrder {
  data: IData;
}
function LastOrders({ data }: ILastOrder) {
  return (
    <div >
      <div className="grid grid-cols-12 p-2 text-center place-items-center md:mx-10 mx-2 border-2 rounded-3xl mb-3 border-slate-400">
        <img className="col-span-3 lg:col-span-2 rounded-lg" src={data.normal} alt="" />
        <div className="ml-2 col-span-5 md:col-span-5">{data.urun_adi}</div>
        <div className=" col-span-4 lg:col-span-4">{data.kisa_aciklama}</div>
      </div>
    </div>
  );
}

export default LastOrders;
