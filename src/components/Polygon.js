import ReactApexChart from "react-apexcharts";
import React from 'react'
import ReactDOM from 'react-dom'

class ApexChart2 extends React.Component {
    constructor(props) {
      super(props);
      // console.log(props.values)

      this.state = {
      
        series: [{
          name: 'Series 1',
          data: [20, 100, 40],
        }],
        options: {
          chart: {
            height: 350,
            type: 'radar',
          },
          dataLabels: {
            enabled: true
          },
          plotOptions: {
            radar: {
              size: 140,
              polygons: {
                strokeColors: '#e9e9e9',
                fill: {
                  colors: ['#f8f8f8', '#fff']
                }
              }
            }
          },
          title: {
            text: 'Radar with Polygon Fill'
          },
          colors: ['#FF4560'],
          markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: '#FF4560',
            strokeWidth: 2,
          },
         
          xaxis: {
            categories: []
          },
          yaxis: {
            tickAmount: 7,
            labels: {
              formatter: function(val, i) {
                if (i % 2 === 0) {
                  return val
                } else {
                  return ''
                }
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div >
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

//   const domContainer = document.querySelector('#app');
//   ReactDOM.render(React.createElement(ApexChart), domContainer);

  export default ApexChart2;