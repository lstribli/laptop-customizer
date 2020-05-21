import React from 'react';
import './App.css';
import CartFeature from './CartFeature';

export default function cart(props) {

  return (
    <div>
      {Object.keys(props.selected).map((feature, i) => {
        return <CartFeature
          key={i}
          featureHash={`${feature}-${i}`}
          selectedOption={props.selected[feature]}
          selected={props.selected} />
      })}
    </div>
  )

}