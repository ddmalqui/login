//import { Perfil } from '../../models/perfil';
import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Crud } from '../../services/crud';
import { NgForm } from '@angular/forms';
import { Perfil } from '../../models/perfil';
import { ToastController } from 'ionic-angular';



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

   perfiList = [];
   userId: string;

/*TODO: Estoy trabajando mal con el modelo. deberia definir un array del modelo pefil*/
   ngOnInit(){
     //lleno el arreglo con los/el perfil
     this.perfiList = [];
     let arr = [];
      this.angularAuth.authState.subscribe((firebaseUser) => {
      if(firebaseUser){
       this.crud.getAPerfil(firebaseUser.uid).snapshotChanges().subscribe(items => {
       this.perfiList = [];
       console.log(items);
       items.forEach(element =>{
         let x = element.payload.toJSON();
         this.perfiList[element.key] = x;
       })
       });
       console.log(this.perfiList);
      }
  })
     
   }

   constructor(public navCtrl: NavController, public navParams: NavParams, public angularAuth : AngularFireAuth
     ,public angularDDBB : AngularFireDatabase, private device: Device, private crud : Crud, private toastCtrl: ToastController) {

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
  this.angularAuth.authState.subscribe((firebaseUser) => {
      if(firebaseUser){
        try{
        this.crud.insertPerfil(perfilForm.value, firebaseUser.uid);
        this.presentToast('Se han guardado los cambios correctamente');
      }catch{
        this.presentToast('No se han podido actualizar los cambios en la Base de Datos');
      }
      }
  })

}

presentToast(msn : string) {
    let toast = this.toastCtrl.create({
      message: msn,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }
}
