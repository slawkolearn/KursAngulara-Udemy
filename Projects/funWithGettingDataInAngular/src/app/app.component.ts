import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angulara  ';

 days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

 dogs = new Array<Dog>();

 constructor(){
   this.dogs.push(new Dog('Reksio', 4), new Dog('Max', 11),
   new Dog('Bethoven', 15), new Dog('Szaki', 11), new Dog('Bruno', 1), new Dog('Rambo', 2));
 }

}

class Dog {
  constructor(public name: string, public age: number){

  }
}
