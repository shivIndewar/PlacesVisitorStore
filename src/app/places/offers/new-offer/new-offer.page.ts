import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form! : FormGroup;
  constructor() { }
  availableFromDate :string="2024-03-21T01:22:00";
  availableToDate :string="2024-03-21T01:22:00";
  showFromDatePicker = false;
  showToDatePicker = false;
  ngOnInit() {
    this.form = new FormGroup({
     title: new FormControl(null,{
      updateOn:'blur',
      validators:[Validators.required]
     }),
     description: new FormControl(null,{
      updateOn:'blur',
      validators:[Validators.required, Validators.maxLength(180)]
     }),
     price: new FormControl(null,{
      updateOn:'blur',
      validators:[Validators.required, Validators.min(1)]
     }),
     dateFrom: new FormControl(null,{
      updateOn: 'blur',
      validators:[Validators.required]
     }),
     dateTo: new FormControl(null,{
      updateOn: 'blur',
      validators:[Validators.required]
     })
    });
  }

  onCreateOfferClick(){
    if(!this.form.valid){
      return;
    }

    console.log(this.form);
  }

  onAvailableFromDateChange(fromDate: any){
    console.log(fromDate)
    this.availableFromDate = fromDate;
    this.showFromDatePicker = false;
  }

  onAvailableToDateChange(toDate:any){
    console.log(toDate);
    this.availableToDate = toDate;
    this.showToDatePicker = false;
  }
  

}
