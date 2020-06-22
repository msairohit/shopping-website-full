import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-manage-vegetables',
  templateUrl: './manage-vegetables.component.html',
  styleUrls: ['./manage-vegetables.component.css']
})
export class ManageVegetablesComponent implements OnInit {

  vegetablesForm: FormGroup;
  vegetables;
  showTable : boolean = false;
  updateDisabled : boolean = true;
  theCheckbox;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private restService : RestService,
    private commonService : CommonService) { }

  ngOnInit() {
    this.vegetablesForm = this.formBuilder.group({
      vegetableName: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
      vegetableDescription: ['', [Validators.required]]
    });
  }

  isValid(formControlName) {
    return this.vegetablesForm.get(formControlName).invalid && (this.vegetablesForm.get(formControlName).touched || this.vegetablesForm.get(formControlName).dirty);
  }

  onSearch() {
    console.log(!this.vegetables);
      // this.showSpinner = true;
      this.commonService.showSpinner();
    this.restService.get("http://localhost:8080/vegetables/getAll").subscribe(
      (data) => {
        console.log(data);
        if(data) {
          this.vegetables = data;
          this.showTable = true;
          this.commonService.hideSpinner();
        }
      },
      (error) => {
        alert("error : " + error.statusText);
        console.error(error);
      }
    );
  }

  onCreate() {
    //TODO : add no details found when no data is returned.
    //TODO : toggle dark mode for entire application if poosible or atleast for table.
    //TODO : keep autocomplete text view for name and implement caching at backend for that rest call.
    this.restService.post("http://localhost:8080/vegetables/create", this.vegetablesForm.value).subscribe(
      (data) => {
        console.log(data);
        this.onClear();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onUpdate() {
    this.vegetablesForm.controls['vegetableName'].enable();
    this.restService.put("http://localhost:8080/vegetables/update", this.vegetablesForm.value).subscribe(
      (data) => {
        console.log(data);
        this.onClear();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onTableEditClicked(data) {
    this.updateDisabled = false;
    // this.vegetablesForm.controls['vegetableName'].enabled;
    this.vegetablesForm.controls['vegetableName'].setValue(data.name);
    this.vegetablesForm.controls['vegetableName'].disable();
    this.vegetablesForm.controls['vegetableDescription'].setValue(data.vegetableDescription);
    this.vegetablesForm.controls['price'].setValue(data.price); 
  }

  onTableDeleteClicked(data) {
    this.vegetablesForm.controls['vegetableName'].enable();
    this.restService.post("http://localhost:8080/vegetables/delete", data).subscribe(
      (data) => {
        console.log(data);
        this.onClear();
      },
      (error) => {
        console.error(error);
      }
    );
    this.vegetablesForm.controls['vegetableName'].disable();
  }

  onClear() {
    this.vegetables = {};
    this.onSearch();
    this.vegetablesForm.controls['vegetableName'].enable();
    this.vegetablesForm.reset();
    this.updateDisabled = true;
  }

  onGetCartDetails() {
    this.restService.get("http://localhost:8080/cart/" + localStorage.getItem('userName'))
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        });
  }

}
