import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  petSearch = '';

  onEnter(){
    console.log(this.petSearch );

    //do iframe stuff
  }
}
