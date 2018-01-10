import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-parametros',
	templateUrl: './parametros.component.html',
	styleUrls: ['./parametros.component.css']
})

export class ParametrosComponent implements OnInit {

	myParam;

	constructor( private _route: ActivatedRoute, private _router: Router) {}

	ngOnInit() {
		this._route.params.forEach( ( params: Params) => {
			this.myParam = params['param'];
		});
	}

	enviarParametro() {
		this._router.navigate(['/parametros', 'Texto Enviado']);
	}

}
