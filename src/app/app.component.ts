import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  {
  name = 'Chris';
  activeSettings: boolean = false;

  openSettings(): void{
    if (this.activeSettings == false){
      this.activeSettings = true;
    }
    else
    {
      this.activeSettings = false;
    }
  }

}
