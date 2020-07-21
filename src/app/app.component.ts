import { Component } from '@angular/core';
import { Appareil } from './appareil';
import { APPAREILS } from './mock-appareils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'Mes Appareils';
  isAuth = false;

  constructor(){
    setTimeout(() => {
      this.isAuth = true;
    }, 1000);
  }

  onAllumer(): void {

    console.log('Appareils allumés !');
  }
}
