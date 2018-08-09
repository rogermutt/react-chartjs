import React, { Component } from 'react';

import BarChart from './Chart/BarChart.js';
import AgeDisplayer from './AgeDisplayer/AgeDisplayer.js';
import Card from './Card/Card.js';
import Title from './Title/Title.js';
import Footer from './Footer/Footer.js';
import Slider from './Slider/Slider.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';
import MONTHS from './months.js';
import country_DB from '/Users/Roger/react-app/src/Chart/Data/country_DB.js';

const countriesList = Object.keys(country_DB);

let n = Math.floor(Math.random() * Math.floor(countriesList.length - 1));

let randomCoutnry = countriesList[n];

class App extends Component {

  state = { countriesList: [randomCoutnry], numMonths: 5, labels: MONTHS.slice(0,1)}

  scrollingHandler = ev => {
    let val = ev.target.value;
    let num = Number(val);
    let final_labels = MONTHS.slice(0,num);

    this.setState({labels: final_labels});
    this.setState({numMonths: MONTHS[num]});
  }

  cardCountriesHandler = ev => {

    let currentList = this.state.countriesList;
    let target = ev.target;
    let country = target.innerText.toString();
    let idx = currentList.indexOf(country);

    let listClasses = target.className.split(' ');

    listClasses.indexOf("selected-Country") === -1 ? target.classList.add("selected-Country") : target.classList.remove("selected-Country");

    idx !== -1 ? currentList.splice(idx, 1) : currentList.push(country);

    this.setState({countriesList: currentList});

  };

  componentDidMount() {

    window.addEventListener("load", () => {

      let defaultCountry = this.state.countriesList.toString();

      [...document.querySelector(".cards").children].forEach( el => {

        if (el.innerText === defaultCountry)
        el.classList.add("selected-Country")

      });

     });
  }

  render() {

    return (
      <div className="wrapper">
        <Title/>
        <AgeDisplayer number={this.state.labels.length}></AgeDisplayer>

        <Slider handler={this.scrollingHandler}/>

        <ErrorBoundary>
          <BarChart number={this.state.countriesList.length} labels={this.state.labels} names={this.state.countriesList} />
        </ErrorBoundary>

        <div className="cards">
        <Card clickHandler={this.cardCountriesHandler} countries={countriesList}></Card>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
