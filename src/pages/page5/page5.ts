import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";

/**
 * Generated class for the Page5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-page5",
  templateUrl: "page5.html"
})
export class Page5Page {
  count: number = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.count = 1;
    console.log("ionViewDidLoad Page5Page");
  }

  next() {
    const alert = this.alertCtrl.create({
      message: "Are you sure you want to go to the next page?",
      mode: "ios",
      buttons: [
        { text: "No" },
        {
          text: "Yes",
          handler: () => {
            this.navCtrl.setRoot("Page4Page");
          }
        }
      ]
    });
    alert.present();
    // if(this.count == 7)
  }
}
