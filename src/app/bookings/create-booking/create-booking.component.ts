import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/places.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent  implements OnInit {

  @Input() selectedPlace : Place={
    id :'',
    title:'',
    price:0,
    description:'',
    imageUrl:''
  }
  constructor(private modlctrl : ModalController) { }

  ngOnInit() {}

  onBookPlace(){
    this.modlctrl.dismiss({message: 'This is a dumy message!'}, 'confirm');
  }

  onCancel(){
    this.modlctrl.dismiss(null, 'cancel');
  }

}
