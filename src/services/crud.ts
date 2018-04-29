import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Perfil } from '../models/perfil';


@Injectable()

export class Crud{

	perfilList : AngularFireList<any>;
	selectPerfil: Perfil = new Perfil();


	constructor(private firebase: AngularFireDatabase) {
		
	}

	getPerfil(){
		return this.perfilList = this.firebase.list('profiles');
	}

	getAPerfil(key : string){
		return this.perfilList = this.firebase.list('profiles/'+key);
	}

	insertPerfil(perfil : Perfil, key : string){
		// this.perfilList.push({
		// 	name: perfil.username,
		// 	phone: perfil.phone,
		// 	lastName: perfil.lastName
		// });

		var usersRef = this.firebase.database.ref("profiles");
		usersRef.child(key).set({
 			name: perfil.name,
			phone: perfil.phone,
			lastName: perfil.lastName
		});
	}

	updateProduct(perfil : Perfil){
		//this.perfilList.update(perfil.$key, {
			//name: perfil.username,
			//phone: perfil.phone,
			//lastName: perfil.lastName
		//});
	}

	deleteProduct($key : string){
		//this.perfilList.remove($key);
	}
	
	


}