const providersInfo = {
	"backblaze.com": {
		minimumPayment: 7,
		storage: {
			price: 0.005,
		},
		transfer: {
			price: 0.01,
		},
	},
	"bunny.net": {
		maximumPayment: 10,
		storage: {
			hdd: {
				price: 0.01,
			},
			ssd: {
				price: 0.02,
			},
		},
		transfer: {
			hdd: {
				price: 0.01,
			},
			ssd: {
				price: 0.01,
			},
		},
	},
	"scaleway.com": {
		storage: {
			multi: {
				price: 0.06,
				free: 75,
			},
			single: {
				price: 0.03,
				free: 75,
			},
		},
		transfer: {
			multi: {
				price: 0.02,
				free: 75,
			},
			single: {
				price: 0.02,
				free: 75,
			},
		},
	},
	"vultr.com": {
		minimumPayment: 5,
		storage: {
			price: 0.01,
		},
		transfer: {
			price: 0.01,
		},
	},
};


const validatePrice = (providerName, storage, transfer, itemOption, obj,) => {
	const minPayment = providersInfo[providerName]?.minimumPayment;
	const maxPayment = providersInfo[providerName]?.maximumPayment;

	const freeStorage = providersInfo[providerName].storage[itemOption]?.free;
	const freeTransfer = providersInfo[providerName].transfer[itemOption]?.free;

	const itemStorage = freeStorage ? Math.max(0, storage - providersInfo[providerName].storage[itemOption].free) : storage
	const itemTransfer = freeTransfer ? Math.max(0, transfer - providersInfo[providerName].transfer[itemOption].free) : transfer

	const itemStoragePrice = itemOption ? providersInfo[providerName].storage[itemOption]?.price : providersInfo[providerName].storage.price;
	const itemTransferPrice = itemOption ? providersInfo[providerName].transfer[itemOption]?.price : providersInfo[providerName].transfer.price
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
	console.log(obj)
	return;
}

module.exports = validatePrice;