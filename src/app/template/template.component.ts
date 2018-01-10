import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-template',
	templateUrl: './template.component.html',
	styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
	isAdmin;
	constructor() {}

	ngOnInit() {}

	cambiarPerfil(isAdmin) {
		this.isAdmin = isAdmin;
	}
}
