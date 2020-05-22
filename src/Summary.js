import React from 'react';
import Cart from './cart';
import Total from './total';


export default function Summary(props) {
  return (
    <div>
      <h2>Your cart</h2>
      <Cart
        selected={props.selected} />
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <Total
          selected={props.selected} />
      </div>
    </div>
  );

}

