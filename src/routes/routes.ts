import { Orders } from '../pages/Orders/Orders';
import { OrderDetail } from '../pages/OrderDetail/OrderDetail';
import { TRoute } from './types';

export const routes: TRoute[] = [
  {
    path: '/',
    name: 'Orders',
    component: Orders,
    exact: true,
  },
  {
    path: '/order/:id',
    name: 'OrderDetail',
    component: OrderDetail,
    exact: true,
  },
];
