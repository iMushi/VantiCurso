import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/timeInterval';

@Component({
	selector: 'app-primerbinding',
	templateUrl: './primerbinding.component.html'
})
export class PrimerbindingComponent implements OnInit {
	public nombre_componente = 'Primer Binding Componente';
	public nombre = 'Gabo';
	public edad = 33;
	public empleado = true;

	public trabajos: Array<string> = ['Consultor', 'Profe'];

	public trabajosSegundoTurno: Array<any> = ['Cajero OXXO', 12345, false];


	public myJson = {
		paramUno: 'Hola',
		paramDos: 'Mundo'
	}

	public jsonRecibido;
	public datoCompartido;


	constructor(protected _dataService: DataServiceService) {
		console.log('Constructor Primer Binding');
	}

	ngOnInit() {
		console.log('On Init primer Binding');
	}

	recibirDatos(dato) {
		console.log('recibiendo');
		this.jsonRecibido = dato;
	}

	setDatoCompartido() {
		console.log('datosCompartidos ===> ');
		this._dataService.setDato(this.datoCompartido);
	}

}
