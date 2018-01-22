import { RestServiceService } from './services/rest-service.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {PrimerbindingComponent} from './primerBinding/primerbinding.component';
import {EmpleadoComponent} from './empleado/empleado.component';
import { TemplateComponent } from './template/template.component';
import { ComponentePipeComponent } from './componente-pipe/componente-pipe.component';
import { MultiplicarPipe } from './multiplicar.pipe';
import {routing, appRoutingProvider} from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { CarrosComponent } from './carros/carros.component';
import { ModelFormCarroComponent } from './model-form-carro/model-form-carro.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { HttpClientModule } from '@angular/common/http';
import { RecibirParamsComponent } from './recibir-params/recibir-params.component';
import { DataServiceService } from './services/data-service.service';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
	declarations: [
		AppComponent,
		PrimerbindingComponent,
		EmpleadoComponent,
		TemplateComponent,
		ComponentePipeComponent,
		MultiplicarPipe,
		NotFoundComponent,
		ParametrosComponent,
		CarrosComponent,
		ModelFormCarroComponent,
		BienvenidoComponent,
		PeticionesComponent,
		RecibirParamsComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		routing,
		NgxQRCodeModule
	],
	providers: [appRoutingProvider, RestServiceService, DataServiceService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
