import { Component } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    public classroom = [
      {
        name: 'undefined',
        status: true
      },
      {
        name: 'boy',
        status: true
      },
      {
        name: 'girl',
        status: true
      }
    ]
    jumanji(){
      for(let item of this.classroom){
        if(item.status === true)
          item.status = true; 
      }
      console.log(this.classroom);
      }
    }


/*
document.getElementById('signout').addEventListener('click', function () {
    for (var i = 0; i <=4; i++) {
        if(classroom[i].status === true){
            classroom[i].status =false;
        }
    }

    console.log(classroom);
});
*/