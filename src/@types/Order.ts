export type TOrderSummary = {
  date: string;
  email: string;
  id: number;
  name: string;
  status: string;
  total: string;
};

export type TAddress = {
  street: string;
  number: number;
  city: string;
  state: string;
  postcode: string;
};

export type TOrderItem = {
  name: string;
  qty: number;
  price: string;
};

export type TFreight = {
  price: string;
  from: number;
  to: number;
};

export type TOrder = {
  id: number;
  name: string;
  email: string;
  address: TAddress;
  total: string;
  status: string;
  payment_method: string;
  items: TOrderItem[];
  freight: TFreight;
  date: string;
};
