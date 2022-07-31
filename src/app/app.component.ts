import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-SPA-accessibility';

  constructor() {
    if(localStorage.getItem("fontSize") !== null) {
      FontSizeUpdate()
    }
    else {
      localStorage.setItem('fontSize', '16');
    }
  }
}

export function FontSizeUpdate():void {
  const fontSize:number = Number(localStorage.getItem("fontSize"))
  document.getElementsByTagName('html')[0].style.fontSize = `${fontSize}px`;
}
