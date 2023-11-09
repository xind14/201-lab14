'use strict';

let canvasElem = document.getElementById('chart')

 
function renderChart() {

//Instantiate a new AppState
let appState = new AppState();

 //Use a method on that AppState to load vote data from localStorage.
appState.loadItems();

//Create a data object for chart.js using your AppState's allProducts array.

let labels = appState.allProducts.map(product => product.name);
let votesData = appState.allProducts.map(product => product.timesClicked);
let viewsData = appState.allProducts.map(product => product.timesShown);

//Combine the data object with configuration information for chart.js type, colors, etc
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Votes',
      data: votesData,
      backgroundColor: 'purple',
      borderColor: 'blue',
      borderWidth: 1,
    },
    {
      label: 'Times Shown',
      data: viewsData,
      backgroundColor: ';pink',
      borderColor: 'red',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

//Call chart.js with the configuration and the canvasElem
new Chart(canvasElem, {
  type: 'bar',
  data: data,
  options: options,
});
}



renderChart();
