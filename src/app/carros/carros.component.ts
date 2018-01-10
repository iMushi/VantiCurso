import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-carros',
	templateUrl: './carros.component.html',
	styleUrls: ['./carros.component.css']
})

export class CarrosComponent implements OnInit {

	carro: Carro;
	carros: Array<Carro>;

	constructor() {

		this.carro = new Carro('', '', '');
		this.carros = [
			new Carro('DanyCar', '2018', 'Rosita'),
			new Carro('LaloCar', '2017', 'Vino'),
			new Carro('JCCar', '2018', 'Naranja')
		];
	}

	ngOnInit() {}

	onSubmit() {
		console.log(this.carro);

		this.carros.push(
			this.carro
		);

		this.carro = null;

	}


}

export class Carro {
	constructor( public marca: string,
	public modelo: string,
	public color: string) {
	}
}
