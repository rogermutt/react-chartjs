const ColorTable = require("/Users/Roger/react-app/src/Chart/Data/Colors.js");

const BarMaker = num => {
  return {
    label: null,
    backgroundColor: `rgba(${ColorTable[num]},1)`,
    borderColor: 'rgba(102,102,102,0.8)',
    borderWidth: 1,
    data: null
  };
};

module.exports = BarMaker;
