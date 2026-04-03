import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  isDark: boolean = false;
  isLoading: boolean = false;


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if ( event instanceof RouteConfigLoadEnd ) {
        this.isLoading = false;
      }
    })
  }

  toggleTheme(){
    this.isDark = !this.isDark;
  }

}
