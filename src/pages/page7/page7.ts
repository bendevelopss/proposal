import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import moment from "moment";
// import moment = require('moment');

/**
 * Generated class for the Page7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-page7",
  templateUrl: "page7.html"
})
export class Page7Page {
  date: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    const d = localStorage.getItem("date");
    this.date = moment(d).format("Do of MMMM YYYY")
    console.log(this.date);

    console.log("ionViewDidLoad Page7Page");
  }

  next(){
    this.navCtrl.setRoot('HomePage')
  }
}
