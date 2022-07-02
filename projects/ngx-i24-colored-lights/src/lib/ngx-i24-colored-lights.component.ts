import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'i24-colored-lights',
  templateUrl: './ngx-i24-colored-lights.component.html',
  styleUrls: ['./ngx-i24-colored-lights.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NgxI24ColoredLightsComponent implements OnInit {

  @Input() count = 150;
  // @Input() colors = ['#D00010', '#FEC641', '#63C13B', '#FE0016', '#5C6C94', '#6B0D05', '#7D0006', '#DB1913', '#FEE34A', '#2F8A2'];
  
  list: any;
  constructor() {
  }

  ngOnInit(): void {
    this.list = new Array(this.count);
  }

}
