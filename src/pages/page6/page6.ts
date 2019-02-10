import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";

/**
 * Generated class for the Page6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-page6",
  templateUrl: "page6.html"
})
export class Page6Page {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad Page6Page");
  }

  no() {
    const alert = this.alertCtrl.create({
      message: "An error has occured. Unacceptable answer.",
      mode: "ios",
      buttons: [
        { text: "Okay" }
        // {
        //   text: "Yes",
        //   handler: () => {
        //     this.navCtrl.setRoot('Page3Page', { date: this.date })
        //     console.log(this.date);
        //   }
        // }
      ]
    });
    alert.present();
  }

  next() {
    this.navCtrl.setRoot("Page7Page");
  }
}
