import React from 'react';
import { toCurrency } from '../../../../core/number';
import { TOrderSummary } from './types';
import classes from './OrderSummary.module.scss';

export function OrderSummary({ items }: TOrderSummary) {
  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <li key={index}>
          <p>
            {item.qty}x {item.name}
          </p>
          <p>{toCurrency(item.price)}</p>
        </li>
      );
    });
  };

  return (
    <div>
      <h3 className={classes.title}>Resumo da Compra</h3>
      <ul className={classes.list}>{renderItems()}</ul>
    </div>
  );
}
