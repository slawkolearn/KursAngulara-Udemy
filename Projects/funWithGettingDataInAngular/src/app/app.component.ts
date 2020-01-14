import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angulara  ';

 days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  isVisible = true;
  isHidden = false;

  show(): void{
    this.isVisible = !this.isVisible;
  }

  hidden(): void{
    this.isHidden = !this.isHidden;
  }

}

