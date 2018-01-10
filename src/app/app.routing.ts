import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TemplateComponent } from './template/template.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ComponentePipeComponent } from './componente-pipe/componente-pipe.component';
import { PrimerbindingComponent } from './primerBinding/primerbinding.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { CarrosComponent } from './carros/carros.component';
import { ModelFormCarroComponent } from './model-form-carro/model-form-carro.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PeticionesComponent } from './peticiones/peticiones.component';


const appRoutes: Routes = [
	{ path: '', component: BienvenidoComponent},
	{ path: 'bienvenido', component: BienvenidoComponent},
	{ path: 'primer', component: PrimerbindingComponent},
	{ path: 'empleado', component: EmpleadoComponent},
	{ path: 'pipes', component: ComponentePipeComponent},
	{ path: 'template', component: TemplateComponent},
	{ path: 'parametros', component: ParametrosComponent},
	{ path: 'parametros/:param', component: ParametrosComponent},
	{ path: 'carros', component: CarrosComponent},
	{ path: 'ModelCarros', component: ModelFormCarroComponent},
	{ path: 'peticion', component: PeticionesComponent},
	{ path: '**', component: NotFoundComponent}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
