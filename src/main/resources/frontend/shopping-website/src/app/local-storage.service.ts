import { Injectable } from '@angular/core';
import { Vegetable } from './vegetable';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  //TODO: get login username and store in local storage.
  constructor() {
    
   }

   isUserLoggedIn() {
     return localStorage.getItem("isUserLoggedIn");
   }

   getUserName() {
     return localStorage.getItem("userName") || "DEFAULT";
   }

  addToLocalStorage(vegetable: Vegetable) {
    var cartItems = this.getFromLocalStorage() || [];
    if(!this.vegetableAlreadyExists(vegetable)) {
      cartItems.push(vegetable);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }

  getFromLocalStorage() : Vegetable[]{
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  }

  printCartItems() {
    if (this.getFromLocalStorage())
      this.getFromLocalStorage().forEach(element => {
        console.log(element.name);
      });
  }

  vegetableAlreadyExists(data) {
    var alreadyExists = false;
    let cartItems = this.getFromLocalStorage();
    for(let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      if (element.name == data.name) {
        alreadyExists = true;
        break;
      }
    }
    /* this.getFromLocalStorage().forEach(element => {
      if (element.name == data.name) {
        alreadyExists = true;
        break;
      }
    }); */
    return alreadyExists;
  }
}
