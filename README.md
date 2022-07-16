# NgxI24ColoredLightsLib
[![](https://img.shields.io/npm/v/ngx-i24-colored-lights)](https://www.npmjs.com/package/ngx-i24-colored-lights)
[![](https://img.shields.io/npm/l/ngx-i24-colored-lights)](https://www.npmjs.com/package/ngx-i24-colored-lights)


 A lightweight plugin to render a simple, animated colored lighted cover.
 
## Features
* highly customizable
* very easy to implement

## Demo
![](https://raw.githubusercontent.com/HibaAlfarkh/ngx-i24-colored-lights-lib/master/demo/images/lights.png)
* [Link](https://stackblitz.com/edit/ngx-i24-colored-lights-demo)

## Get started
#### Installation
```
$ npm i ngx-i24-colored-lights
```
#### Example
##### TS
###### Module
```typescript 
import { NgxI24ColoredLightsModule } from 'ngx-i24-colored-lights';

@NgModule({
  imports:      [ BrowserModule, FormsModule,NgxI24ColoredLightsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```
 ###### Component
 ```typescript 
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colorCollection = ['#e7e984', '#6bbada', '#e98b84'];
  lights = 30;
  textColor = '#FFFFFF';
  lightSize = 50;
  blurLevel = 3;
  text = '';
  imageUrl =
    'https://raw.githubusercontent.com/HibaAlfarkh/ngx-i24-colored-lights-lib/master/projects/colored-lights-demo/src/assets/street.jpg';
}
```
##### HTML
```html 
<i24-colored-lights
  [colorCollection]="colorCollection"
  [lightsCount]="lights"
  [lightSize]="lightSize"
  [blurLevel]="blurLevel"
  [title]="text"
  [imageUrl]="imageUrl"
></i24-colored-lights>
``` 

## Options

| Property (Type) | Default | Description|
| - | - | - |
| lightsCount | 100 | The count of the lights |
| colorCollection | ['#D00010', '#FEC641', '#63C13B', '#FE0016', '#5C6C94', '#6B0D05', '#7D0006', '#DB1913', '#FEE34A', '#2F8A2'] | The colors of the lights |
| lightSize | 75 | The size of the lights |
| blurLevel | 3 | The blur level of the lights |
| imageUrl | '' | The background image url |

## Support 


[![](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/hibaalfarkh)

 

## Copyright
Copyright (c) 2022 Hiba Alfarkh, contributors. Released under the MIT