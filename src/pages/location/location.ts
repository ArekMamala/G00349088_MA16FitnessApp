import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LocationProvider} from '../../providers/location/location';  

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  movies:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private lp:LocationProvider) {
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad LocationPage');
   this.lp.GetMovieData().subscribe(data =>{
     this.movies = data.Search;
   })
  }

}
