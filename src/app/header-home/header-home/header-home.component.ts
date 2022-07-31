import { Component, OnInit } from '@angular/core';
import { FontSizeUpdate } from 'src/app/app.component';
@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  AddFontSize(): void {
    let fontStorage:number = Number(localStorage.getItem('fontSize'));
    if(fontStorage < 22) {
      localStorage.setItem('fontSize', `${fontStorage + 2}`);
      FontSizeUpdate();
    }
  }

  DownFontSize():void {
    let fontStorage:number = Number(localStorage.getItem('fontSize'));

    if(fontStorage > 16) {
      localStorage.setItem('fontSize', `${fontStorage - 2}`);
      FontSizeUpdate();
    }
  }

  ResetFont():void {
  localStorage.setItem('fontSize', '16');
  FontSizeUpdate();
  }

}
