import React from 'react';

const AgeDisplayer = props => {

  let text = props.number > 1 ? " months" : " month";

  return (
    <div className="ageDisplayer">{props.number} {text}</div>
  )
};

export default AgeDisplayer;
