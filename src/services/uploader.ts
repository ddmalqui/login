import { Injectable } from '@angular/core';
import *  as firebase from 'firebase';


@Injectable()

export class Uploader {
	
	storageRef : firebase.storage.Reference;

	constructor() {
		this.storageRef = firebase.storage().ref();
	}

	upload(file){
		let myfile = this.storageRef.child("/images/"+file.name);
		let uploadTask = myfile.put(file);

		return new Promise((resolve,reject)=>{

			uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
			(snapshot)=>{},
			(err)=>reject(err),
			() => {
				console.log(uploadTask.snapshot.downloadURL);
				resolve(uploadTask.snapshot.downloadURL);
					} 
			);

		});

		
	}

}