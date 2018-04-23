
import { Perfil } from '../../models/perfil';
import { Component } from '@angular/core';
import { Device } from '@ionic-native/device';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {


  	userId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularAuth : AngularFireAuth
  	,public angularDDBB : AngularFireDatabase, public device: Device) {

    this.angularAuth.authState.subscribe((firebaseUser) => {
				if(firebaseUser){
					 this.userId = firebaseUser.uid;
					 console.log('userId ' + this.userId);
				}else{
					 this.userId = null;
					 console.log('no tengo userId ' + this.userId);
				}
			}
				)

   
  }

  	perfil = {} as Perfil;
  	arrData = [];
  	username;
  	

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  setProfile(){
	this.angularDDBB.object("profiles/"+this.userId).set(this.perfil).then(() => console.log('puto'));
  }

}
