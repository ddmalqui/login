
import { Perfil } from '../../models/perfil';
import { Component } from '@angular/core';
import { Device } from '@ionic-native/device';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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

    perfil = {} as Perfil;
  	userId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularAuth : AngularFireAuth
  	,public angularDDBB : AngularFireDatabase, private device: Device) {

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


// Attach an asynchronous callback to read the data at our posts reference


var onePerson =  angularDDBB.database.ref(this.userId);

onePerson.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log("zc: " + newPost);
  console.log("Author: " + newPost.username);
  console.log("Title: " + newPost.phone);
  console.log("Previous Post ID: " + newPost.lastName);
});


    if (this.device.model !== null){
      this.perfil.username = 'J7 2016';
    }
    else{
       this.perfil.username = this.device.model;
    }
  }

  	arrData = [];
  	

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  setProfile(){
	this.angularDDBB.object("profiles/"+this.userId).set(this.perfil).then(() => console.log('puto'));
  }

}
