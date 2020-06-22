import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private localStorageService : LocalStorageService, private router : Router) { }

  ngOnInit() {
  }

  isAccessable() {
    return this.localStorageService.isUserLoggedIn() == "true";
  }

  onLogOut() {
    localStorage.setItem("isUserLoggedIn", "false");
    this.router.navigate(['testLogin']);
  }

}
