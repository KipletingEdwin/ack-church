
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  isDark: boolean = false;

  constructor() { }

  ngOnInit() {}


  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
  }


  
}



////////////////////////////////////////////////////////////////

// export class HeaderComponent {
//   isDark = false;

//   toggleTheme() {
//     this.isDark = !this.isDark;
//     document.body.classList.toggle('dark-theme', this.isDark);
//   }

//   navigate(section: string) {
//     // Hook this into your router or scroll logic
//     console.log('Go to:', section);
//   }
// }

