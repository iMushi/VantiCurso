import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-componente-pipe',
	templateUrl: './componente-pipe.component.html',
	styleUrls: ['./componente-pipe.component.css']
})
export class ComponentePipeComponent implements OnInit {

	fecha;

	constructor() {}

	ngOnInit() {
		this.fecha = new Date();
	}
}
