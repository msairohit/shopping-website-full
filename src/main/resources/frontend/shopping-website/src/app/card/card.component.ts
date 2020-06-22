import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { Vegetable } from '../vegetable';
import { LocalStorageService } from '../local-storage.service';
import { element } from 'protractor';
import { CounterComponent } from '../counter/counter.component';
import { RestService } from '../rest.service';
import { Cart } from '../cart';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  childMessage;

  buttonDisabled: boolean = false;
  addToCartString = "Add to cart";
  updateCartString = "Update cart";
  buttonName: string = this.addToCartString;

  cartData;
  totalCost : number = 0;

  
  @Input('parentData') parentData: any[];

  @Output() totalCostFromChild = new EventEmitter<number>();

  @ViewChild(CounterComponent, {static: false}) counterComponent;
  @ViewChildren(CounterComponent) counterComponentList : QueryList<CounterComponent>;

  constructor(private localStorageService : LocalStorageService, private restService : RestService
    , private commonService : CommonService) { }

  ngOnInit() {
    this.commonService.showSpinner();
    setTimeout(() => {
      this.myNgAfterViewInit();
      this.commonService.hideSpinner();
    }, 2000);
  }

  myNgAfterViewInit() {
    this.commonService.showSpinner();
    var cartData: Cart[];
    this.restService.get("http://localhost:8080/cart/" + this.localStorageService.getUserName())
      .subscribe(
        (data: Cart[]) => {
          cartData = data;
          console.log(cartData);
          this.parentData.forEach(parent => {
            var cart = [];
            cart = cartData.filter(cart => cart.name == parent.name);
            if (cart.length > 0) {
              console.log("already exists", cart);
              parent.quantity = cart[0].quantity;
              parent.buttonStatus = true;
              parent.buttonText = this.updateCartString;
            } else {
              parent.quantity = 0;
              parent.buttonStatus = false;
              parent.buttonText = this.addToCartString;
            }
          })
          this.cartData = data;
        },
        (error) => {
          console.error(error);
          this.commonService.hideSpinner();
        });
        this.commonService.hideSpinner();
  }

  updateCartDataInLocalVariable () {
    this.restService.get("http://localhost:8080/cart/" + this.localStorageService.getUserName()).subscribe(
      (data : any) => {
        console.log(data);
        if(this.parentData[0].totalCost) {
          this.parentData = data;
          this.totalCost = 0;
        data.forEach(element => {
          this.totalCost += element.totalCost;
        });
        this.updateTotalCost();
        }
        this.cartData = data;
      },
      (error) => {
        console.error("something wrong");
      }
    );
  }


  removeItemFromCart(data) {
    //delete from db.
    console.log(data);
    var url = "http://localhost:8080/cart/";
    var uri = data.name;
    this.restService.delete(url + uri).subscribe(
      (data) => {
        console.log("successfully deleted ", data);
        this.updateCartDataInLocalVariable();
      },
      (error) => {
        console.error("something fishy, not deleted!! ", error);
      }
      );
      
      //change quantity to 0.
      var counter =  this.counterComponentList.filter(item => item.id == data.id);
      if(counter.length > 0) {
        counter[0].count = 0;
      }
      
      //enable button.
      //change text to add to cart.
      if (!data.customerName) {
        this.enableButton(data);
        document.getElementById("btn-" + data.name).innerHTML = this.addToCartString;
      }

  }


  addOrUpdateCart(data) {
    //TODO : update store functionality to keep track of current situation.
    console.log({ data });
    console.log("add to cart called, need to write rest call to save the data");
    var quantity = this.getQuantity(data);
    data.quantity = quantity;
    if (quantity == 0) {
      alert("Select a quantity, cant deliver empty basket!!");
      console.log("quantity not correct");
    } else {
      let cart: Cart = new Cart();
      if(data.customerName) {
        cart = data;
      } else {
        cart.quantity = quantity;
        cart.customerName = this.localStorageService.getUserName();
        cart.name = data.name;
        cart.costOfEachItem = data.price;
      }

        this.restService.put("http://localhost:8080/cart", cart).subscribe(
          (data : any) => {
            console.log(data);
            this.updateCartDataInLocalVariable();
            this.updateIndividualCost(data);
          }, (error) => {
            console.error(error);
          });
      if (!data.customerName) {
        this.disableButton(data);
        data.buttonStatus = this.getButtonStatus(data);
        data.buttonText = this.getButtonText(data);
      }
    }
  }

  updateCost(data) {
    if(this.parentData[0].totalCost) {
      this.updateIndividualCost(data);
      this.updateTotalCost();
    }
  }

  updateTotalCost() {
    this.totalCostFromChild.emit(this.totalCost);
  }

  updateIndividualCost(data) {
    document.getElementById('totalCostLabel-' + data.name).innerHTML = data.totalCost;
  }

  toggleButtonName(data) {
    document.getElementById("btn-" + data.name).innerHTML =
      document.getElementById("btn-" + data.name).innerHTML == this.addToCartString ? this.updateCartString : this.addToCartString;
  }

  disableButton(data) {
    (document.getElementById("btn-"+data.name) as any).disabled = true;
  }

  enableButton(data) {
    (document.getElementById("btn-"+data.name) as any).disabled = false;
  }

  getButtonStatus(data) {
    return (document.getElementById("btn-"+data.name) as any).disabled;
  }

  getButtonText(data) {
    return (document.getElementById("btn-"+data.name) as any).innerHTML;
  }

  getQuantity(data) {
    console.log(this.counterComponent.count);
    console.log(this.counterComponentList.toArray());
    var counter =  this.counterComponentList.filter(item => item.id == data.id);
    if(counter.length > 0) {
      return counter[0].count;
    }
    return 0;
  }

  itemExistsInCart(data) {
    var alreadyExists = false;
    for(let index = 0; index < this.cartData.length; index++) {
      const element = this.cartData[index];
      if (element.name == data.name) {
        alreadyExists = true;
        break;
      }
    }
    return alreadyExists;
  }

  receiveMessage(event, data) {
    console.log(event);
    console.log({ data });
    console.log(JSON.stringify(this.cartData));
    if (this.parentData[0].customerName) {//card is used in cart, so updating te quantity in the DB.
      this.addOrUpdateCart(data);
    } else if(this.itemExistsInCart(data)) {//card is not used in cart and it is already in the cart, so just changing the values.
      if(event == data.quantity) {//quantity is same as cart, so defaulting the values.
        this.disableButton(data); 
        document.getElementById("btn-" + data.name).innerHTML = this.updateCartString;
      } else { //card quantity is not same as cart, so changing the button properties.
      if (document.getElementById("btn-" + data.name).innerHTML == this.addToCartString) {
        this.toggleButtonName(data);
        this.enableButton(data);
      }
      if (document.getElementById("btn-" + data.name).innerHTML == this.updateCartString) {
        this.enableButton(data);
      }
    }
  }
  }

}
