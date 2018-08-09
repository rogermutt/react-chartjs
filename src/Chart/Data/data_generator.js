const blockMaker = require('./blockMaker.js')
const country_DB = require('./country_DB.js');

const countriesList = Object.keys(country_DB);
const temperaturesList = Object.values(country_DB);

const dataGenerator = (countries, numBlocks) => {

  let blocksBundled = blockMaker(numBlocks);
  let temperaturesIndexed = countries.map(country => countriesList.indexOf(country)).map(idx => temperaturesList[idx]);

  blocksBundled.datasets.map((el, idx) => {
    return el.data = temperaturesIndexed[idx];
  });

  return blocksBundled;

};

module.exports = dataGenerator;
