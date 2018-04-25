
//import { Perfil } from '../../models/perfil';
import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Crud } from '../../services/crud';
import { NgForm } from '@angular/forms';
import { Perfil } from '../../models/perfil';


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

 export class PerfilPage implements OnInit{

   perfiList : Perfil[];
   userId: string;
   username: string;

   ngOnInit(){
     //lleno el arreglo con los/el perfil
     this.crud.getPerfil().snapshotChanges().subscribe(items => {
       this.perfiList = [];
       items.forEach(element =>{
         let x = element.payload.toJSON();
         x["$key"] = element.key;
         console.log(x);
         this.perfiList.push(x as Perfil)  
       })
       });
   }

   constructor(public navCtrl: NavController, public navParams: NavParams, public angularAuth : AngularFireAuth
     ,public angularDDBB : AngularFireDatabase, private device: Device, private crud : Crud) {

     // this.angularAuth.authState.subscribe((firebaseUser) => {
         
     //    if(firebaseUser){

     //     this.userId = firebaseUser.uid;
     //     let starCountRef = this.angularDDBB.database.ref("profiles/"+firebaseUser.uid);
     //     let query = starCountRef.on("value", function(snapshot) {
     //     }, function (errorObject) {
     //       console.log("The read failed: " + errorObject.code);
     //     });

     //   }else{
     //     this.userId = null;
     //     console.log('no tengo userId ' + this.userId);
     //   }
     // }
     // )

     //  console.log('this.username: ' + this.username);
}

ionViewDidLoad() {
  console.log('ionViewDidLoad PerfilPage');
}

setProfile(){
	//this.angularDDBB.object("profiles/"+this.userId).set(this.perfil).then(() => console.log('puto'));
}

onSubmit(perfilForm : NgForm){
  this.crud.insertPerfil(perfilForm.value);
}

}
