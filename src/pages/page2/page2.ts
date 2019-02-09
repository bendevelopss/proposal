import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
  date: string = ""
  today: any = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }


  next() {
    const alert = this.alertController.create({
      message: 'Are you sure about the Date? It cannot be changed again.',
      mode: 'ios',
      buttons: [

        { text: "No" },
        {
          text: "Yes",
          handler: () => {
            this.navCtrl.setRoot('Page3Page')
            localStorage.setItem('date', this.date)
            console.log(localStorage.getItem('date'));
          }
        }
      ]
    })
    alert.present()


  }

}
