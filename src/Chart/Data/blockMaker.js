const BarMaker = require('./BarMaker.js');

const blockMaker = num => {

  let numBlocks = [];
  let arrList = num === 0 ? [1] : Array.from({length: num}, (x, i) => i);

  arrList.map(index => numBlocks.push( BarMaker(index) ) );

  if (numBlocks.length > 0)
  return { labels: "TEMPORARY", datasets: numBlocks };

};

module.exports = blockMaker;
