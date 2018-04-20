import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

const identifire = "token";
@Injectable()

export class Authentication{
	constructor(private AgularAuth : AngularFireAuth){
		this.setUp();
	}

	public token : string;

		setUp(){
			//guardo en el local storage si alguien ya esta loguiado.
			this.token = this.getTockenFromLS();
			console.log(this.token);
			this.AgularAuth.authState.subscribe((firebaseUser) => {
				if(firebaseUser){
					localStorage.setItem(identifire,firebaseUser.uid);
					this.token = firebaseUser.uid;
				}else{
					localStorage.removeItem(identifire);
					this.token = null;
				}
			}
				)
		}

		getTockenFromLS() : string{
			return localStorage.getItem(identifire);

		}

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

		logOut(){
			console.log('sarasa');
			return this.AgularAuth.auth.signOut().then(() => 
				{this.token = null}
				)
		}



}