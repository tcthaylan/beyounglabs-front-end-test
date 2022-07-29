import React from 'react';
import { useQuery } from 'react-query';
import { getOrderById } from '../../core/orders';
import { OrderSummary } from './components/OrderSummary/OrderSummary';
import classes from './OrderDetail.module.scss';
import { Container } from '../../components/Container/Container';
import { Stepper } from '../../components/Stepper/Stepper';
import { useParams } from 'react-router-dom';
import { toCurrency } from '../../core/number';

const steps = [
  'Aguardando pagamento',
  'Pagamento aprovado',
  'Pedido em separação',
  'Pedido em transporte',
  'Pedido entregue',
];

export function OrderDetail() {
  let { id } = useParams() as { id: string };
  const {
    data: order,
    error,
    isLoading,
  } = useQuery(['orders-by-id', id], () => getOrderById(Number(id)));

  return (
    <Container>
      {error ? (
        <p>Error: {error}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : order ? (
        <>
          <div className={classes.welcomeAndExitContainer}>
            <h2>Olá, {order.name}!</h2>
            <a href="/">Sair</a>
          </div>

          <div className={classes.orderNumber}>
            <h3>Número do Pedido:</h3>
            <p>{order.id}</p>
          </div>

          <OrderSummary items={order.items} />

          <div className={classes.deliveryDetails}>
            <div>
              <p>Prazo de Entrega</p>
              <p>
                de {order.freight.from} a {order.freight.to} dias
              </p>
            </div>
            <div>
              <p>Frete</p>
              <p>{toCurrency(order.freight.price)}</p>
            </div>
            <div>
              <p>Total</p>
              <p>{toCurrency(order.total)}</p>
            </div>
          </div>

          <div className={classes.deliveryTracking}>
            <h3>Acompanhe seu pedido</h3>
            <Stepper steps={steps} currentStep={order.status} />
          </div>

          <div className={classes.orderAddress}>
            <div>
              <h4 className={classes.label}>Entregar em:</h4>
              <p className={classes.text}>
                {order.address.street}, {order.address.number} -{' '}
                {order.address.city} - {order.address.state} -{' '}
                {order.address.postcode}
              </p>
            </div>
            <div>
              <h4 className={classes.label}>Forma de pagamento</h4>
              <p className={classes.text}>{order.payment_method}</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}
