import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Flashlight} from '@ionic-native/flashlight';
@IonicPage()
@Component({
  selector: 'page-running',
  templateUrl: 'running.html',
})
export class RunningPage {
  isOn:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private flashlight: Flashlight) {
  }

  async isAvailable():Promise<boolean>{
    try{
      return await this.flashlight.available();
    }
    catch(e){
      console.log(e);
    }
  }
  async toggleFlash(): Promise<void>{
    try{
      let available = await this.isAvailable();
      if(available){
        await this.flashlight.toggle();
        this.isOn =!this.isOn;  
      }else{
       console.log("Isint available");
      }
    }
    catch(e){
      console.log(e);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RunningPage');
  }




}
