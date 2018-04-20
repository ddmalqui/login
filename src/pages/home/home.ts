import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Authentication } from '../../services/authentication';
import { Uploader } from '../../services/uploader';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

	files : any;


  constructor(public navCtrl: NavController, 
  			private auth: Authentication,
  			private uploader : Uploader ) {
  }

  fileChanges(ev){
  	console.log(ev.target.files);
  	this.files = ev.target.files[0];
  }

  submit(){
  	if (this.files.lenght <= 0)
  		return;
  	console.log('asdf');
  	this.uploader.upload(this.files);	

  }

}
