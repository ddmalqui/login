import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Authentication } from '../../services/authentication';


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
          private Auth : Authentication) {
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad SingUpPage');
  	}

  	createAccountWithEmailAndPassword() {
      this.Auth.createUserWithEmailAndPassword(this.correo,this.pass);
  	}

    createAccountWithGoogle() {
      this.Auth.createUserWithGoogle();
    }

}
