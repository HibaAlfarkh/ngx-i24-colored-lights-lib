import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'i24-colored-lights',
  templateUrl: './ngx-i24-colored-lights.component.html',
  styleUrls: ['./ngx-i24-colored-lights.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class NgxI24ColoredLightsComponent implements OnInit,AfterViewInit {
  private _BG ='linear-gradient(#0A0707 0%, #110C0D 50%, #0C090A 100%)';
  @Input() colorCollection = ['#D00010', '#FEC641', '#63C13B', '#FE0016', '#5C6C94', '#6B0D05', '#7D0006', '#DB1913', '#FEE34A', '#2F8A2'];
	@Input() lightsCount= 100;
	@Input() textColor= '#FFFFFF';
	@Input() lightSize=75;
	@Input() blurLevel=3;
  @Input() title = "Happy Birthday"
	@Input() imageUrl='';
  private totalAnimation= 10;
  private maxDelay= 5;
  private minDuration = 5;
  private maxDuration = 25;
  private sizeVariety = 0.25;
  list: any = [];
  constructor() {
  }

  ngOnInit(): void {
    this.initLights();
  }

  ngAfterViewInit(){
   
  }

  private random(n:number){
    return Math.floor(Math.random() * n) + 1;
  }

  private initLights(){
    for (let index = 1; index < this.lightsCount; index++) {
      this.list.push({
        width:this.lightSize + this.random(this.sizeVariety*this.lightSize),
        vertical: this.random(100),
        horizontal: this.random(100),
        blur: this.blurLevel + this.random(this.blurLevel),
        delay: this.random(this.maxDelay),
        animation: this.random(this.totalAnimation),  
        duration: this.minDuration + this.random(this.maxDuration), 
        color :this.colorCollection[this.random(this.colorCollection.length)-1],
      })
    }
    if(this.imageUrl===''){
      this.imageUrl=this._BG;
    }
    else{
      this.imageUrl='url('+this.imageUrl+')';
    }
  }
}
