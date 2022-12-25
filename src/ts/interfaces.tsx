export interface ICard {
  desc?: string;
  title?: string;
  price?: string;
  className?: string;
  img?: string;
  ldesc?: string;
  itemId?: string;
}

export interface ICartItem {
  desc: string;
  img: string;
  itemId: string;
  title: string;
  price: string;
  orderId: string;
  handleClick: (orderId: string) => void;
}

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
export interface ILastOrder {
  data: IData;
}

export interface IUserinfo {
  userEmail: string;
  userPass: string;
  userName: string;
  userSurname: string;
  userId: string;
  userPhone: string;
}

export interface IChange {
  changePage: () => void;
}

export interface IModal {
  desc?: any;
  title?: string;
  className?: string;
  img?: string;
  ldesc?: string;
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IProps {
  handleLogout: any;
  log: any;
}

export interface IChange {
  changePage: () => void;
}

export interface IItem {
  CatogryId: String;
  TopCatogryId: String;
  CatogryName: String;
}

export interface ISubCategories {
  item: IItem;
}
