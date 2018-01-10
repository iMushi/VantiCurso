import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-recibir-params',
	templateUrl: './recibir-params.component.html',
	styleUrls: ['./recibir-params.component.css']
})
export class RecibirParamsComponent implements OnInit {

	@Input() paramUno : string;
	@Input('texto') paramDos : string;
	@Input('jsonParam') jsonRecibido : any;

	@Output() datoHijo = new EventEmitter();

	constructor() {
	}

	ngOnInit() {
	}

	enviarDatoHijo() {
		this.datoHijo.emit({
			valor : "JSON desde HIjo"
		});
	}

}
