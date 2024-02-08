import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '2doEntregableOficial';

constructor(
  private authServiceService : AuthServiceService,
  public router: Router,
){}

ngOnInit(): void {
  if(!this.authServiceService.isLoggedIn()){
    this.router.navigate(['/login'])
  }
}


}
