import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
  date: string = ""

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }


  next() {
    const alert = this.alertController.create({
      message: 'Are you sure about the Date? This will not be changed again.',
      mode: 'ios',
      buttons: [

        { text: "No" },
        {
          text: "Yes",
          handler: () => {
            this.navCtrl.setRoot('Page3Page', { date: this.date })
            console.log(this.date);
          }
        }
      ]
    })
    alert.present()


  }

}
