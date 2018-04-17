import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the SingUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sing-up',
  templateUrl: 'sing-up.html',
})
export class SingUpPage {

	correo: string = 'ddmalqui@gmail.com';
	pass: string;


  	constructor(public navCtrl: NavController, 
  				public navParams: NavParams,
  				private angularFire : AngularFireAuth) {
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad SingUpPage');
  	}

  	createAccount() {
    	this.angularFire.auth.createUserWithEmailAndPassword(this.correo,this.pass);
  	}

}
