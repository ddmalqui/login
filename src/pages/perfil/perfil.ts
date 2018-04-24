
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
   username: string;

   constructor(public navCtrl: NavController, public navParams: NavParams, public angularAuth : AngularFireAuth
     ,public angularDDBB : AngularFireDatabase, private device: Device, message: string) {

     this.angularAuth.authState.subscribe((firebaseUser) => {
         
        if(firebaseUser){

         this.userId = firebaseUser.uid;
         let starCountRef = this.angularDDBB.database.ref("profiles/"+firebaseUser.uid);
         let query = starCountRef.on("value", function(snapshot) {
           console.log('snapshot.val().username: ' + snapshot.val().username );
           message = snapshot.val().username;
         }, function (errorObject) {
           console.log("The read failed: " + errorObject.code);
         });

       }else{
         this.userId = null;
         console.log('no tengo userId ' + this.userId);
       }
     }
     )

      console.log('this.username: ' + this.username);
}

ionViewDidLoad() {
  console.log('ionViewDidLoad PerfilPage');
}

setProfile(){
	this.angularDDBB.object("profiles/"+this.userId).set(this.perfil).then(() => console.log('puto'));
}

}
