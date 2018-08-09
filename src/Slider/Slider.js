import React from 'react';

const Slider = props => {
  return (<div className="div-scroll"><input className="month-scroll" onChange={props.handler} step="1" defaultValue ="1" type="range" min="1" max="12" /></div>);
};

export default Slider;
