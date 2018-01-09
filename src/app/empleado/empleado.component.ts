import {Component} from '@angular/core';
import {Empleado} from './empleado';


@Component({
	selector: 'app-empleado',
	templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {


	public nombrecomponente: string;

	public empleado: Empleado;
	public empleados: Array<Empleado>;
	public empleadoExterno: boolean;

	public color: string;

	constructor() {

		this.nombrecomponente = 'Componente Empleado';


		this.empleado = new Empleado('Gabo', 33, 'Profe', true);

		this.empleados = [
			new Empleado('Gabo', 33, 'Profe', true),
			new Empleado('Eduardo', 30, 'Consultor', true),
			new Empleado('JC', 39, 'Consultor', true),
			new Empleado('Daniela', 28, 'Consultor', true)
		];

		this.empleadoExterno = false;

		this.color = 'green';


	}

	ngOnInit() {

	}


	cambiarExterno( mostrar: boolean){
		this.empleadoExterno = mostrar;
	}

}
