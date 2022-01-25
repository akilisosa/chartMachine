import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-widget',
  templateUrl: './graph-widget.component.html',
  styleUrls: ['./graph-widget.component.scss']
})
export class GraphWidgetComponent implements OnInit {

  @Input() title = 'TCC Savings';
  @Input() subHeader = 'Sub-header';

  @Input() target = '800m';
  @Input() actual = '1,000m';

  @Input() data = {
    2020: {
      Q1: 500,
      Q2: 700,
      Q3: 600,
      Q4: 900
    },
    2021: {
      Q1: 700,
      Q2: 600,
      Q3: 800,
      Q4: 1000
    }
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
