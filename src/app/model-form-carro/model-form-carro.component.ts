import { Carro } from './../carros/carros.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { DataServiceService } from '../services/data-service.service';

@Component({
	selector: 'app-model-form-carro',
	templateUrl: './model-form-carro.component.html',
	styleUrls: ['./model-form-carro.component.css']
})
export class ModelFormCarroComponent implements OnInit {

	formCarro: FormGroup;
	carros: Array<Carro>;

	errorModelo;
	datoCompartido;

	constructor( private _dataService: DataServiceService) {

		this.formCarro = new FormGroup({
			marca: new FormControl('', [Validators.required, Validators.minLength(3)]),
			modelo: new FormControl('', Validators.compose([Validators.required,
				Validators.pattern('[0-9]{4}'),
				Validators.minLength(4), Validators.maxLength(4),
				this.validateNumbers])),
			color: new FormControl('', Validators.required)
		});

		this.formCarro.get('modelo').statusChanges.subscribe(
			status => {
				if (status === 'INVALID') {
					this.errorModelo = true;
				}else {
					this.errorModelo = false;
				}
			}
		);
	}

	ngOnInit() {

		this._dataService.datoCompartido$.subscribe(
			dato => {
				this.datoCompartido = dato;
			}
		)

	}

	validateNumbers(control: AbstractControl) {
		return isNaN(control.value) ? { numbers: true} : null;
	}
}
