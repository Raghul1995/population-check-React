// chart options
const options = {
	chart: {
		height: 400,
		width: '100%',
		type: 'bar',
		background: '#f4f4f4',
		foreColor: '#333'
	},
	series: [
		{
			name: 'Population',
			data: [
				1515017,
				599011,
				316588,
				160462,
				144826,
				122953,
				120650,
				111267,
				109869,
				96996,
				96766,
				91940,
				87404,
				76761,
				73782,
				73383,
				69816,
				69419,
				68059,
				64031
			]
		}
	],
	xaxis: {
		categories: [
			'Stockholm',
			'Gothenburg',
			'Malmö',
			'Uppsala',
			'Upplands Väsby',
			'Västerås',
			'Örebro',
			'Linköping',
			'Helsingborg',
			'Jönköping',
			'Norrköping',
			'Lund',
			'Umeå',
			'Gävle',
			'Borås',
			'Södertälje',
			'Eskilstuna',
			'Halmstad',
			'Växjö',
			'Karlstad'
		]
	},
	plotOptions: {
		bar: {
			horizontal: false
		}
	},
	fill: {
		colors: [ '#f44336' ]
	},
	dataLabels: {
		enabled: false
	},
	title: {
		text: 'Largest cities by population in Sweden',
		align: 'center',
		margin: 20,
		offsetY: 20,
		style: {
			fontsize: '25px'
		}
	}
};
// init charts
const chart = new ApexCharts(document.querySelector('#chart'), options);
// REnder chart
chart.render();

//Event method
const pressBtn = document.querySelector('.pressHori');
pressBtn.addEventListener('click', onChange);
function onChange() {
	chart.updateOptions({
		plotOptions: {
			bar: {
				horizontal: true
			}
		}
	});
}

const pressedBtn = document.querySelector('.pressVerti');
pressedBtn.addEventListener('click', Change);
function Change() {
	chart.updateOptions({
		plotOptions: {
			bar: {
				horizontal: false
			}
		}
	});
}