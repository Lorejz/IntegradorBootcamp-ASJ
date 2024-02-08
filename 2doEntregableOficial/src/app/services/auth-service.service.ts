import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { this.getLoginState() }

  private isAuthenticated: boolean = false;


  login(username: string, password: string): boolean {
    // aca podria llamar a autenticar con el backend
    if (username === 'admin' && password === 'admin123') {
      this.isAuthenticated = true;
      this.saveLoginState();
      return true;
    }else{
      this.isAuthenticated = false;
      this.saveLoginState();
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.saveLoginState();
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }


  saveLoginState () {
    localStorage.setItem('isAuthenticated',String(this.isAuthenticated))
  }

  getLoginState () {
    const stored = localStorage.getItem('isAuthenticated');
    if ( stored ) {
      this.isAuthenticated = JSON.parse(stored)
    }else{
      this.isAuthenticated = false ;
    }
  }





}
