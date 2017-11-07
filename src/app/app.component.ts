import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  {
  constructor(private router: Router) {}

  name = 'Chris';
  activeSettings: boolean = false;

  gotoAccount() {
    this.router.navigate(['/account']);
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }

  openSettings(): void {
    //   if (this.activeSettings == false){
    //     this.activeSettings = true;
    //   }
    //   else
    //   {
    //     this.activeSettings = false;
    //   }
    // }

    this.router.navigate(['/settings']);
  }
}
