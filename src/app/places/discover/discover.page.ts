import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../places.model';
import { SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces : Place[] =[];
  checkedSegment:any = "all";
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onFilterUpdate(evnet : CustomEvent<SegmentChangeEventDetail>){
    this.checkedSegment = evnet.detail.value; 
    console.log(evnet.detail.value);
  }

}
