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
			let bunnyStoragePrice = (bunnyStorageType.elements.storageType.value === "HDD") ? provider.storage.hdd.price : provider.storage.ssd.price;
			let bunnySum = bunnyStoragePrice * storage + (provider.transfer.price * transfer);
			let bunnyResult = Math.min(bunnySum, provider.maximumPayment).toFixed(2)
			resultObj[providerName] = bunnyResult
			break;
		case "scaleway.com":
			let scalewayStorage = storage - provider[scaleWayOptionType.elements.optionType.value].storage.free > 0 ? storage - provider[scaleWayOptionType.elements.optionType.value].storage.free : 0
			let scalewayTransfer = transfer - provider[scaleWayOptionType.elements.optionType.value].transfer.free > 0 ? transfer - provider[scaleWayOptionType.elements.optionType.value].transfer.free : 0

			let scalewayStoragePrice = provider[scaleWayOptionType.elements.optionType.value].storage.price
			let scalewayTransferPrice = provider[scaleWayOptionType.elements.optionType.value].transfer.price
			let scalewayResult = (scalewayStoragePrice * scalewayStorage + scalewayTransferPrice * scalewayTransfer).toFixed(2);
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
	myChartLaptop.data.datasets[0].data = Object.values(resultObj);
	myChartLaptop.update();
	myChartMobile.data.datasets[0].data = Object.values(resultObj);
	myChartMobile.update();
	return;
}
