import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import {ChartComponent,ApexAxisChartSeries,ApexChart,ApexYAxis,ApexXAxis,ApexTitleSubtitle, ApexResponsive} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  responsive: ApexResponsive[];  
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-home-page-vertical',
  templateUrl: './home-page-vertical.component.html',
  styleUrls: ['./home-page-vertical.component.css']
})
export class HomePageVerticalComponent implements OnInit {

  data: any;
  selection: any=[];
  @ViewChild("chart")
  chart: ChartComponent = new ChartComponent;
  chartOptions: any;
  barChart: ChartComponent = new ChartComponent;
  barChartOptions: any;  
  pieChart: ChartComponent = new ChartComponent;
  pieChartOptions: any;    
  id: any;
  fullPriceData: any = [];

  constructor(private activeRoute: ActivatedRoute, private router: Router) { 
    this.chartOptions = {
      series: [
        {
          name: "candle",
          data: [
          ]
        }
      ],
      chart: {
        type: "candlestick",
        height: 350
      },
      title: {
        text: "CandleStick Chart",
        align: "left"
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    };

    this.barChartOptions = {
      series: [
        {
          name: "Inflation",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val: any) {
            return val + "%";
          }
        }
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: 0,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };

    this.pieChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        height: 350,        
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };


  }

  ngOnInit(): void {        
    this.activeRoute.data.subscribe(({ 
      data })=> { 
      this.data=data;

      var singlePriceArray: any;
     
      for (let i of this.data.candlestick)
      {
        singlePriceArray = {x: new Date(i[0]), y: [i[1],i[2],i[3],i[4]]}
        this.fullPriceData.push(singlePriceArray)
      }
      var finaldata: any;
      finaldata = "{data:[" + this.fullPriceData + "]}"
     this.chartOptions.series = [{
      data: this.fullPriceData
    }];


    })   
  }
}