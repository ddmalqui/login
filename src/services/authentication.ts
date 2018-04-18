import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';



@Injectable()

export class Authentication{
	constructor(private AgularAuth : AngularFireAuth){}

		createUserWithEmailAndPassword(correo,password){
			this.AgularAuth.auth.createUserWithEmailAndPassword(correo,password);
		}

}