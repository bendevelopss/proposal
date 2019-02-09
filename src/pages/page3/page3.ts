import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";

/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-page3",
  templateUrl: "page3.html"
})
export class Page3Page {
  date: string;
  isNext: boolean = false;
  count: number = 1

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController
  ) {}

  ionViewDidLoad() {
    this.count = 1;
    this.date = this.navParams.get("date");
    console.log(this.date);
  }

  no() {
    const alert = this.alertController.create({
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
    this.count++;
    if(this.count == 14) this.navCtrl.setRoot('Page5Page')
  }

  // next2() {
  //   this.navCtrl.setRoot("Page4Page");
  // }
}
