# NgxI24ColoredLightsLib

 A lightweight plugin to render a simple, animated colored lighted cover.
 
## Features
* highly customizable
* very easy to implement

## Demo
[![](https://raw.githubusercontent.com/HibaAlfarkh/ngx-i24-colored-lights-lib/blob/master/demo/images/lights.png)](https://stackblitz.com/edit/ngx-i24-colored-lights-demo)
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

## Copyright
Copyright (c) 2022 Hiba Alfarkh, contributors. Released under the MIT
<!-- 
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-i24-colored-lights` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-i24-colored-lights`.
> Note: Don't forget to add `--project ngx-i24-colored-lights` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-i24-colored-lights` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-i24-colored-lights`, go to the dist folder `cd dist/ngx-i24-colored-lights` and run `npm publish`.

## Running unit tests

Run `ng test ngx-i24-colored-lights` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
