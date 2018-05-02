import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Flashlight} from '@ionic-native/flashlight';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-running',
  templateUrl: 'running.html',
})
export class RunningPage {
  isOn:boolean=false;
  intputEvent:string;
  pushUps:string;
  pullUps:string;
  sitUps:string;
  squats:string;
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private flashlight: Flashlight,private storage: Storage) {
    this.storage.get('run').then((data)=> {
      this.items =data;
    });
  };

  saverun(){
    this.storage.set("run", this.intputEvent)
    this.storage.set("psu", this.pushUps)
    this.storage.set("plu", this.pullUps)
    this.storage.set("su", this.sitUps)
    this.storage.set("sq", this.squats)
    }
    
    loadData(){
    this.storage.get("run").then((val)=>{
        if(val ==null){
            console.log("no runs ");
        }else{
            console.log("run- "+ val);
        }
    })
    .catch((err)=>{
        console.log("error =" +err);  
    })
    
    this.storage.get("psu").then((val)=>{
      if(val ==null){
          console.log("no pushups ");
      }else{
          console.log("psu- "+ val);
      }
    })
    .catch((err)=>{
      console.log("error =" +err);  
    })
  
    this.storage.get("plu").then((val)=>{
      if(val ==null){
          console.log("no pulups ");
      }else{
          console.log("plu- "+ val);
      }
    })
    .catch((err)=>{
      console.log("error =" +err);  
    })

    this.storage.get("su").then((val)=>{
      if(val ==null){
          console.log("no sitUps ");
      }else{
          console.log("su- "+ val);
      }
    })
    .catch((err)=>{
      console.log("error =" +err);  
    })
    this.storage.get("sq").then((val)=>{
      if(val ==null){
          console.log("no squats ");
      }else{
          console.log("sq- "+ val);
      }
    })
    .catch((err)=>{
      console.log("error =" +err);  
    })
  }

  lightOn(){
    this.flashlight.switchOn();
    this.updateStatus();
      }
      lightOff(){
        this.flashlight.switchOff();
        this.updateStatus();
      }
      updateStatus(){
        this.isOn = this.flashlight.isSwitchedOn();
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RunningPage');
  }




}
