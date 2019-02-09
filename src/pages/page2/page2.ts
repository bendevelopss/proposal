import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
  today: any = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  startAlert(){
    const alert = this.alertController.create({
      message: 'Are you sure about the date? It cannot be changed again.',
      mode: 'ios',
      buttons: [

        { text: "No" },
        {
          text: "Yes",
          handler: () => {
            this.next();
          }
        }
      ]
    })
    alert.present()
  }


  next() {
    const alert = this.alertController.create({
      message: 'Are you really really sure about this?',
      mode: 'ios',
      buttons: [

        { text: "No" },
        {
          text: "Yes",
          handler: () => {
            localStorage.setItem('date', this.today)
            console.log(0,this.today);

            console.log(localStorage.getItem('date'));
            this.navCtrl.setRoot('Page3Page')

          }
        }
      ]
    })
    alert.present()


  }

}
