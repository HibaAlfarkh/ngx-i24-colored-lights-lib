import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   colorCollection = ['#e7e984', '#6bbada','#e98b84'];
	lights= 100;
	textColor= '#FFFFFF';
	 lightSize=50;
	blurLevel=3;
  text = "Happy Birthday"
  imageUrl ="/assets/street.jpg"
}
