import React from 'react';
import {Bar} from 'react-chartjs-2';
let data_generator = require('/Users/Roger/react-app/src/Chart/Data/data_generator.js');

let BarChart = props => {

   let nameList = props.names;
   let chart_axis = props.labels;
   let data = null;

   (function(){
     data = data_generator(nameList, props.number)
   })();

   if (data) {
     data.labels = chart_axis;
     data.datasets.map((obj, idx) => obj.label = nameList[idx]);
   }

   return (<Bar data={data} height={80} />)

};

export default BarChart;

// core.controller.js:691 Uncaught TypeError: Cannot read property '_meta' of undefined
//     at Chart.getDatasetMeta (core.controller.js:691)
//     at ChartElement.getMeta (core.datasetController.js:127)
//     at ChartElement.onDataSplice (core.datasetController.js:317)
//     at core.datasetController.js:41
//     at Object.each (helpers.core.js:108)
//     at Array.value (core.datasetController.js:39)
//     at index.js:194
//     at Array.map (<anonymous>)
//     at ChartComponent.updateChart (index.js:189)
//     at ChartComponent.componentDidUpdate (index.js:66)
//     at commitLifeCycles (react-dom.development.js:14369)
//     at commitAllLifeCycles (react-dom.development.js:15462)
//     at HTMLUnknownElement.callCallback (react-dom.development.js:100)
//     at Object.invokeGuardedCallbackDev (react-dom.development.js:138)
//     at invokeGuardedCallback (react-dom.development.js:187)
//     at commitRoot (react-dom.development.js:15603)
//     at completeRoot (react-dom.development.js:16618)
//     at performWorkOnRoot (react-dom.development.js:16563)
//     at performWork (react-dom.development.js:16482)
//     at performSyncWork (react-dom.development.js:16454)
//     at interactiveUpdates$1 (react-dom.development.js:16719)
//     at interactiveUpdates (react-dom.development.js:2150)
//     at dispatchInteractiveEvent (react-dom.development.js:4532)


// index.js:2178 The above error occurred in the <ChartComponent> component:
//     in ChartComponent (created by Bar)
//     in Bar (at Chart.js:14)
//     in lineChart (at App.js:85)
//     in ErrorBoundary (at App.js:84)
//     in div (at App.js:78)
//     in App (at index.js:7)
