import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

@Component({
  selector: 'app-barracomdril',
  templateUrl: './barracomdril.component.html',
  styleUrls: ['./barracomdril.component.css']
})
export class BarracomdrilComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Browser market shares. January, 2018'
    },
    subtitle: {
      text:
        'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total percent market share'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        },
        point: {
          events: {
            click: function() {
              if (this.options.url != null) {
                location.href = this.options.url;
              } else {
                location.href = 'https://www.yahoo.com/';
              }
            }
          }
        }
      }
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
      {
        name: 'Browsers',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 62.74,
            drilldown: 'Chrome'
          },
          {
            name: 'Firefox',
            y: 10.57,
            drilldown: 'Firefox'
          },
          {
            name: 'Internet Explorer',
            y: 7.23,
            drilldown: 'Internet Explorer'
          },
          {
            name: 'Safari',
            y: 5.58,
            drilldown: 'Safari'
          },
          {
            name: 'Edge',
            y: 4.02,
            drilldown: 'Edge'
          },
          {
            name: 'Opera',
            y: 1.92,
            drilldown: 'Opera'
          },
          {
            name: 'Other',
            y: 7.62,
            drilldown: null
          }
        ]
      }
    ],
    drilldown: {
      series: [
        {
          name: 'Chrome',
          id: 'Chrome',
          data: [
            { name: 'v65.0', y: 0.1, url: 'http://www.google.com' },
            { name: 'v64.0', y: 1.3, url: 'http://www.google.com' },
            { name: 'v63.0', y: 53.02, url: 'http://www.google.com' },
            { name: 'v62.0', y: 1.4, url: 'http://www.google.com' },
            { name: 'v61.0', y: 0.88, url: 'http://www.google.com' },
            { name: 'v60.0', y: 0.56, url: 'http://www.google.com' },
            { name: 'v59.0', y: 0.45, url: 'http://www.google.com' },
            { name: 'v58.0', y: 0.49, url: 'http://www.google.com' },
            { name: 'v57.0', y: 0.32, url: 'http://www.google.com' },
            { name: 'v56.0', y: 0.29, url: 'http://www.google.com' },
            { name: 'v55.0', y: 0.79, url: 'http://www.google.com' },
            { name: 'v54.0', y: 0.18, url: 'http://www.google.com' },
            { name: 'v51.0', y: 0.13, url: 'http://www.google.com' },
            { name: 'v49.0', y: 2.16, url: 'http://www.google.com' },
            { name: 'v48.0', y: 0.13, url: 'http://www.google.com' },
            { name: 'v47.0', y: 0.11, url: 'http://www.google.com' },
            { name: 'v43.0', y: 0.17, url: 'http://www.google.com' },
            { name: 'v29.0', y: 0.26, url: 'http://www.google.com' }
          ]
        },
        {
          name: 'Firefox',
          id: 'Firefox',
          data: [
            ['v58.0', 1.02],
            ['v57.0', 7.36],
            ['v56.0', 0.35],
            ['v55.0', 0.11],
            ['v54.0', 0.1],
            ['v52.0', 0.95],
            ['v51.0', 0.15],
            ['v50.0', 0.1],
            ['v48.0', 0.31],
            ['v47.0', 0.12]
          ]
        },
        {
          name: 'Internet Explorer',
          id: 'Internet Explorer',
          data: [
            ['v11.0', 6.2],
            ['v10.0', 0.29],
            ['v9.0', 0.27],
            ['v8.0', 0.47]
          ]
        },
        {
          name: 'Safari',
          id: 'Safari',
          data: [
            ['v11.0', 3.39],
            ['v10.1', 0.96],
            ['v10.0', 0.36],
            ['v9.1', 0.54],
            ['v9.0', 0.13],
            ['v5.1', 0.2]
          ]
        },
        {
          name: 'Edge',
          id: 'Edge',
          data: [['v16', 2.6], ['v15', 0.92], ['v14', 0.4], ['v13', 0.1]]
        },
        {
          name: 'Opera',
          id: 'Opera',
          data: [['v50.0', 0.96], ['v49.0', 0.82], ['v12.1', 0.14]]
        }
      ]
    }
  };
}
