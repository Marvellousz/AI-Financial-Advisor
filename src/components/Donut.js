import ReactApexChart from "react-apexcharts";
import React from 'react'
import ReactDOM from 'react-dom'

class ApexChart1 extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            width : 280,
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        
        
      };
    }

  

    render() {
      return (
        <div>
          {/* {console.log('sfgsdffffffffffgdf',this.props.values)} */}
          <div id="chart" >
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380}/>
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

//   const domContainer = document.querySelector('#app');
//   ReactDOM.render(React.createElement(ApexChart), domContainer);

  export default ApexChart1;