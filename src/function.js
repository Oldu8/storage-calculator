import { myChartLaptop, myChartMobile } from "./chart";

export const resultObj = {};
export const resultObj2 = {};


// Here I was trying to switch chart type like it was showed on youtube chanel,
// but it's not working with horizontalBar and bar

// const updateChartType = () => {
// 	const isLaptop = window.matchMedia('(min-width: 1024px)').matches;
// 	// myChartLaptop.config.type = isLaptop ? 'horizontalBar' : 'bar'
// 	console.log(myChartLaptop.config.type)
// }
// window.addEventListener('resize', updateChartType);

export const calcPric = (providerName, provider, storage, transfer, obj = resultObj) => {

	const itemOption = document.getElementById(providerName)?.elements.optionType.value.toLowerCase()
	const minPayment = provider?.minimumPayment;
	const maxPayment = provider?.maximumPayment;

	const freeStorage = provider.storage[itemOption]?.free;
	const freeTransfer = provider.transfer[itemOption]?.free;


	const itemStorage = freeStorage ? Math.max(0, storage - provider.storage[itemOption].free) : storage
	const itemTransfer = freeTransfer ? Math.max(0, transfer - provider.transfer[itemOption].free) : transfer

	const itemStoragePrice = itemOption ? provider.storage[itemOption]?.price : provider.storage.price;
	const itemTransferPrice = itemOption ? provider.transfer[itemOption]?.price : provider.transfer.price
	const itemSum = itemStoragePrice * itemStorage + itemTransferPrice * itemTransfer;
	let itemResult = 0;

	if (minPayment) {
		itemResult = (itemSum > minPayment ? itemSum : minPayment).toFixed(2)

	} else {
		itemResult = itemSum.toFixed(2)
	}

	if (maxPayment) {
		itemResult = Math.min(itemSum, maxPayment).toFixed(2)
	} else {
		itemResult = itemResult ? itemResult : itemSum.toFixed(2)
	}
	obj[providerName] = itemResult
	return;
}

export const updCharts = (providerName, provider, storageValue, transferValue) => {
	calcPric(providerName, provider, storageValue, transferValue, resultObj)

	myChartLaptop.data.datasets[0].data = Object.values(resultObj);
	myChartLaptop.update();
	myChartMobile.data.datasets[0].data = Object.values(resultObj);
	myChartMobile.update();
}
