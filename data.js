export const providersInfo = {
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
			price: 0.01,
		},
	},
	"scaleway.com": {
		multi: {
			storage: {
				free: 75,
				price: 0.06,
			},
			transfer: {
				free: 75,
				price: 0.02,
			},
		},
		single: {
			storage: {
				free: 75,
				price: 0.03,
			},
			transfer: {
				free: 75,
				price: 0.02,
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