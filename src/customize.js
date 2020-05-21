import React from 'react';
import './App.css';
import CustomizeFeatureList from './featureList';

export default function customize(props) {

  return (
    <div>
      {Object.keys(props.features).map((feature, i) => {
        return <CustomizeFeatureList
          key={i}
          feature={feature}
          featureHash={`${feature}-${i}`}
          features={props.features}
          selected={props.selected}
          onUpdate={props.onUpdate}
        />
      })
      }
    </div>
  );
}