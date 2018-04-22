
import { Perfil } from '../../models/perfil';
import { Component } from '@angular/core';
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
  	,public angularDDBB : AngularFireDatabase ) {

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

    
    //this.angularDDBB.list("profiles/${this.userId}").valueChanges().subscribe(data => {
  	//	this.arrData = data;});

  	//console.log(this.arrData);

  }

  	perfil = {} as Perfil;
  	arrData = [];
  	username;
  	

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  setProfile(){
	this.angularDDBB.list("profiles/"+this.userId).push(this.perfil);

  }

}
