import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()

export class Authentication{
	constructor(private AgularAuth : AngularFireAuth){}

		createUserWithEmailAndPassword(correo,password){
			return this.AgularAuth.auth.createUserWithEmailAndPassword(correo,password);
		}

		createUserWithGoogle(){
			let provider = new firebase.auth.GoogleAuthProvider;
			return this.createUserWithProvider(provider);
		}

		createUserWithFacebook(){
			let provider = new firebase.auth.FacebookAuthProvider;
			return this.createUserWithProvider(provider);
		}


		createUserWithProvider(provider){
			return this.AgularAuth.auth.signInWithRedirect(provider)
			.then(result =>{
					return firebase.auth().getRedirectResult;
				});
		}



}