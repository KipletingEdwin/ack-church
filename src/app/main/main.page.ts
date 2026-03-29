import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  isDark: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  toggleTheme(){
    this.isDark = !this.isDark;
  }

}
