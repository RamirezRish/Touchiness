import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  // imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  goTo(id:string){
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
  }

}
