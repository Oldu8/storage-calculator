import { providersInfo } from './data'
const ctx = document.getElementById('myChartLaptop').getContext('2d');

export const myChartLaptop = new Chart(ctx, {
	type: 'horizontalBar',
	data: {
		labels: Object.keys(providersInfo),
		datasets: [{
			data: [],
			borderWidth: 1,
			backgroundColor: [
				'rgba(255, 99, 132, 0.7)',
				'rgba(54, 162, 235, 0.7)',
				'rgba(255, 206, 86, 0.7)',
				'rgba(75, 192, 192, 0.7)'
			],
		}]
	},
	options: {
		scales: {
			xAxes: [{
				gridLines: {
					drawOnChartArea: false
				},
				ticks: {
					display: false,
				},
				grid: [{
					drawOnChartArea: false
				}]
			}],
			yAxes: [{
				ticks: {
					display: false,
					// callback: function (value, index, ticks) {
					// 	return '$' + value;
					// }
				},
				drawOnChartArea: false,
				gridLines: {
					display: false,
					drawOnChartArea: false
				},
				grid: [{
					drawOnChartArea: false
				}]
			}],
		},
		legend: {
			display: false
		},
		layout: {
			padding: {
				right: 40
			}
		},
		animation: {
			duration: 1,
			onComplete: function () {
				var chartInstance = this.chart,
					ctx = chartInstance.ctx;
				ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
				ctx.textAlign = 'center';
				ctx.textBaseline = 'bottom';

				this.data.datasets.forEach(function (dataset, i) {
					var meta = chartInstance.controller.getDatasetMeta(i);
					meta.data.forEach(function (bar, index) {
						var data = dataset.data[index];
						ctx.fillText(data + '$', bar._model.x + 20, bar._model.y + 7.5);
					});
				});
			}
		}
	}
});
const ctxMobile = document.getElementById('myChartMobile').getContext('2d');

export const myChartMobile = new Chart(ctxMobile, {
	type: 'bar',
	data: {
		labels: Object.keys(providersInfo),
		datasets: [{
			data: [],
			borderWidth: 1,
			backgroundColor: [
				'rgba(255, 99, 132, 0.7)',
				'rgba(54, 162, 235, 0.7)',
				'rgba(255, 206, 86, 0.7)',
				'rgba(75, 192, 192, 0.7)'
			],
		}]
	},
	options: {
		scales: {
			xAxes: [{
				gridLines: {
					drawOnChartArea: false
				},
				ticks: {
					display: false,
				},
				grid: [{
					drawOnChartArea: false
				}]
			}],
			yAxes: [{
				ticks: {
					display: false,
				},
				drawOnChartArea: false,
				gridLines: {
					display: false,
					drawOnChartArea: false
				},
				grid: [{
					drawOnChartArea: false
				}]
			}],
		},
		legend: {
			display: false
		},
		layout: {
			padding: {
				right: 40
			}
		},
		animation: {
			duration: 1,
			onComplete: function () {
				var chartInstance = this.chart,
					ctx = chartInstance.ctx;
				ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
				ctx.textAlign = 'center';
				ctx.textBaseline = 'bottom';

				this.data.datasets.forEach(function (dataset, i) {
					var meta = chartInstance.controller.getDatasetMeta(i);
					meta.data.forEach(function (bar, index) {
						var data = dataset.data[index];
						ctx.fillText(data + '$', bar._model.x, bar._model.y + 15);
					});
				});
			}
		}
	}
});
