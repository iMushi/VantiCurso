import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
	selector: 'app-primerbinding',
	templateUrl: './primerbinding.component.html'
})
export class PrimerbindingComponent implements OnInit {
	public nombre_componente = 'Primer Binding Componente';
	public nombre  = 'Gabo';
	public edad = 33;
	public empleado = true;

	public trabajos: Array<string> = ['Consultor', 'Profe'];

	public trabajosSegundoTurno: Array<any> = ['Cajero OXXO', 12345, false];

	constructor() {
		console.log('Constructor Primer Binding');
	}

	ngOnInit() {
		console.log('On Init primer Binding');
	}
}
