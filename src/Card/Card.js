import React from 'react';

const CardGenerator = props => {

  const cardList = props.countries.map(country =>
    <button className="country-card" onClick={props.clickHandler.bind(this)} key={country.toString()}>{country}</button>
  );

  return (cardList);

};

export default CardGenerator;
