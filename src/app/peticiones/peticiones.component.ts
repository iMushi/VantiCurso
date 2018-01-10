import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../services/rest-service.service';
import { WebSocketService } from '../services/web-socket.service';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';


@Component({
	selector: 'app-peticiones',
	templateUrl: './peticiones.component.html',
	styleUrls: ['./peticiones.component.css'],
	providers: [ RestServiceService, WebSocketService ]
})

export class PeticionesComponent implements OnInit {

	URL = 'wss://echo.websocket.org'

	mensajesWS;
	textoSocket;

	constructor(private _rest: RestServiceService,
				private _ws: WebSocketService ) {

		this.mensajesWS = <Subject<String>>_ws.connect(this.URL).map(
			(response: MessageEvent): String => {
				console.log('response WS ===>', response);
				return JSON.parse(response.data);
			}
		)



	}

	ngOnInit() {

	}
	getPosts() {

		this._rest.getPosts().toPromise().then(
			response => {
				return this._rest.doPost().toPromise();
			}
		).then(
			response => {
				console.log('Regresa promesa ===> ' , response);
			}
		).catch(
			error => {
				console.log(error)
			}
		);

	}
	postInfo() {
		this._rest.doPost().subscribe(
			response => {
				console.log(response);
			},error => {
				console.log(error);
			}
		)
	}

	enviarMsg(){
		this.mensajesWS.next(this.textoSocket);
	}
}
