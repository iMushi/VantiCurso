import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataServiceService {

	public subject = new BehaviorSubject<string>('');
	public datoCompartido$ = this.subject.asObservable();

	constructor() {
	}

	setDato(dato: string) {
		this.subject.next(dato);
	}
}
