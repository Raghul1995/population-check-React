import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				chart: {
					background: '#f4f4f4',
					foreColor: '#333'
				},
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
						horizontal: true
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
			]
		};
	}
	onClick = () => {
		this.setState({
			options: {
				...this.state.options,
				plotOptions: {
					...this.state.plotOptions,
					bar: { ...this.state.options.plotOptions.bar, horizontal: false }
				}
			}
		});
	};
	handleChange = () => {
		this.setState({
			options: {
				...this.state.options,
				plotOptions: {
					...this.state.plotOptions,
					bar: {
						...this.state.options.plotOptions.bar,
						horizontal: !this.state.options.plotOptions.bar.horizontal
					}
				}
			}
		});
	};
	render() {
		return (
			<React.Fragment>
				<Chart type="bar" width="100%" height="400" options={this.state.options} series={this.state.series} />
				<button onClick={this.onClick}>Horizontal</button>
				<button onSubmit={this.handleChange}>Vertical</button>
			</React.Fragment>
		);
	}
}
export default PopChart;
