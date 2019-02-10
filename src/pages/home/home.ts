import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  images: any = [
    '/assets/images/16.jpeg',
    '/assets/images/18.jpeg',
    '/assets/images/19.jpg',
    '/assets/images/22.jpg',
    '/assets/images/24.jpg',
    // '/assets/images/51.JPG',
    '/assets/images/25.jpeg',
    '/assets/images/26.jpg',
    '/assets/images/27.jpeg',
    '/assets/images/28.jpg',
    '/assets/images/29.jpeg',
    '/assets/images/30.jpg',
    '/assets/images/32.jpg',
    '/assets/images/33.jpeg',
    '/assets/images/62.jpg',
    '/assets/images/39.jpg',
    '/assets/images/41.jpg',
    '/assets/images/44.jpeg',
    '/assets/images/54.jpg',
    '/assets/images/55.jpg',
    '/assets/images/57.jpg',
    '/assets/images/47.jpg',

    // '/assets/images/48.JPG',
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  next(){
    this.navCtrl.setRoot('Page2Page')
  }

}
