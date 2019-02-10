import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from "ionic-angular";

/**
 * Generated class for the Page4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-page4",
  templateUrl: "page4.html"
})
export class Page4Page {
  count: number = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    this.count = 1;
    console.log("ionViewDidLoad Page4Page");
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

  async next() {
    this.count++;
    if (this.count == 7) this.navCtrl.setRoot("Page6Page");
  }
}
