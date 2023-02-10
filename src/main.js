import './style.scss'
import { providersInfo } from './data'
import { updCharts } from './function';

let scaleMin = 0;
let scaleMax = 1000;
let scaleStep = 1;
let initValue = 0;

document.querySelector('#app').innerHTML = `
<div>
  <section class="storage">
    <input id="inputStorage" type="range" min=${scaleMin} max=${scaleMax} step=${scaleStep} value=${initValue} />
    <p class="valueBox"><span id="storageValue">${initValue}</span> GB</p>
  </section>
  <section class="transfer">
    <input id="inputTransfer" type="range" min=${scaleMin} max=${scaleMax} step=${scaleStep} value=${initValue} />
    <p class="valueBox"><span id="transferValue">${initValue}</span> GB</p>
  </section>
</div>
`

// Inputs
const inputStorage = document.getElementById("inputStorage");
const storageValue = document.getElementById("storageValue");
const inputTransfer = document.getElementById("inputTransfer");
const transferValue = document.getElementById("transferValue");

// buttons
const bunnyStorageType = document.getElementById('bunny.net');
const scaleWayOptionType = document.getElementById('scaleway.com');


// Logic 
inputStorage.addEventListener("input", (event) => {
  storageValue.textContent = event.target.value;
  setPrice()
});

inputTransfer.addEventListener("input", (event) => {
  transferValue.textContent = event.target.value;
  setPrice()
});

scaleWayOptionType.addEventListener("change", (event) => {
  setPrice()
})

bunnyStorageType.addEventListener("change", (event) => {
  setPrice()
})

function setPrice() {
  Object.keys(providersInfo).forEach(providerName => {
    const provider = providersInfo[providerName];
    const transfer = transferValue.textContent
    const storage = storageValue.textContent
    const itemOption = document.getElementById(providerName)?.elements.optionType.value.toLowerCase()
    updCharts(providerName, provider, storage, transfer, itemOption)
  });
}