import { TOrder, TOrderSummary } from '../@types/Order';
import { API_URL } from '../env';

export async function getOrders(): Promise<TOrderSummary[]> {
  return fetch(`${API_URL}/orders.json`).then(res => res.json());
}

export async function getOrderById(id: number): Promise<TOrder> {
  return fetch(`${API_URL}/${id}.json`).then(res => res.json());
}
