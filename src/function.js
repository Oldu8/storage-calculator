import { myChartLaptop, myChartMobile } from "./chart";

//buttons
const bunnyStorageType = document.getElementById('bunnyStorage');
const scaleWayOptionType = document.getElementById('scalewayOption');

const resultObj = {};

// Here I was trying to switch chart type like it was showed on youtube chanel,
// but it's not working with horizontalBar and bar

// const updateChartType = () => {
// 	const isLaptop = window.matchMedia('(min-width: 1024px)').matches;
// 	// myChartLaptop.config.type = isLaptop ? 'horizontalBar' : 'bar'
// 	console.log(myChartLaptop.config.type)
// }
// window.addEventListener('resize', updateChartType);

export function calcPrice(providerName, provider, storageValue, transferValue) {
	const transfer = transferValue.textContent
	const storage = storageValue.textContent

	switch (providerName) {
		case "backblaze.com":
			let backblazeSum = provider.storage.price * storage + provider.transfer.price * transfer;
			backblazeSum = backblazeSum > provider.minimumPayment ? backblazeSum : provider.minimumPayment;
			let backblazeResult = backblazeSum.toFixed(2)
			resultObj[providerName] = backblazeResult;
			break;
		case "bunny.net":
			const storageType = bunnyStorageType.elements.storageType.value.toLowerCase();
			let bunnyStoragePrice = provider.storage[storageType].price;
			let bunnySum = bunnyStoragePrice * storage + (provider.transfer.price * transfer);
			let bunnyResult = Math.min(bunnySum, provider.maximumPayment).toFixed(2)
			resultObj[providerName] = bunnyResult
			break;
		case "scaleway.com":
			const optionType = scaleWayOptionType.elements.optionType.value;
			const scalewayStorage = Math.max(0, storage - provider[optionType].storage.free);
			const scalewayTransfer = Math.max(0, transfer - provider[optionType].transfer.free);
			const scalewayStoragePrice = provider[optionType].storage.price
			const scalewayTransferPrice = provider[optionType].transfer.price
			const scalewayResult = (scalewayStoragePrice * scalewayStorage + scalewayTransferPrice * scalewayTransfer).toFixed(2);
			resultObj[providerName] = scalewayResult
			break;
		case "vultr.com":
			let vultrSum = provider.storage.price * storage + provider.transfer.price * transfer;
			vultrSum = vultrSum > provider.minimumPayment ? vultrSum : provider.minimumPayment;
			let vultrResult = vultrSum.toFixed(2)
			resultObj[providerName] = vultrResult
			break;
		default:
			break;
	}
	updCharts();
	return;
}

const updCharts = () => {
	myChartLaptop.data.datasets[0].data = Object.values(resultObj);
	myChartLaptop.update();
	myChartMobile.data.datasets[0].data = Object.values(resultObj);
	myChartMobile.update();
}