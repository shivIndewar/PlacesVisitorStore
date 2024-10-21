import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../places.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place : Place = {
    id:'',
    title:'',
    description:'',
    imageUrl:'',
    price:0
  }  

  constructor(private router: ActivatedRoute, private navCtrl: NavController, 
    private placesService:PlacesService,
    private modalCtrl : ModalController,
    private actionsheetCtrl : ActionSheetController
    
    ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('placeId')){
          this.navCtrl.navigateBack('/places/tabs/offers');
          return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId')!);
    })
  }

  onBookPlace(){
    // this.navCtrl.navigateBack('/places/tabs/discover');

    this.actionsheetCtrl.create({
      header: "Choose an action",
      buttons:[
        {
          text:'select date',
          handler:()=>{
            this.openBookingModel('select');
          }
        },
        {
          text:'Random Date',
          handler:()=>{
            this.openBookingModel('random');
          }
        },
        {
          text:'cancel',
          role:"destructive"
        }
      ]
    }).then(actionSheetElm=>{
      actionSheetElm.present();
    });

    
  }

  openBookingModel(mode :'select' |'random'){
    console.log(mode);
    this.modalCtrl.create({
      component : CreateBookingComponent,
      componentProps :{ selectedPlace : this.place}

    }).then(modlEl =>{
      modlEl.present(); 
      return modlEl.onDidDismiss();
    }).
    then(resultData=>{
      console.log(resultData.data, resultData.role);
      if(resultData.role === 'confirm'){
        console.log('Booked');
      }
    });
  }

}
