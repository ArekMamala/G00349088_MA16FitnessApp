import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage'; 
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import * as moment from 'moment';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    eventSource =[];
    viewTitle: string;
    selectedDay = new Date();

    calendar ={
      mode: 'month',
      currentDate: this.selectedDay
    }
    intputEvent:string;
    key:string = 'event'
    images =['background.jpg','img.jpg'];
    
  constructor(public navCtrl: NavController,
    public storage: Storage,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
   
  }

  //adding event
  addEvent(){
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();

    modal.onDidDismiss(data =>{
      if(data){
        let eventData = data;

        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(()=>{
          this.eventSource = events;
        });
      }

    })
  }
  //event title
  onViewTitleChanged(Title){
    this.viewTitle= Title;
  }
  //event day
  onTimeSelected(ev){
    this.selectedDay =ev.selectedTime;
  }
  //eventstart end 
  onEventSelected(event){
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    let alert = this.alertCtrl.create({
      title: '' + start+ '<br>To: '+end,
      buttons: ['OK']
    });
  alert.present();
  }
}
