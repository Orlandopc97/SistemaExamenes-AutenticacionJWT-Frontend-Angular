/*Configuracion de Rutas */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
            //Arreglo rutas
                        //Configuracion de direccionamiento de rutas 
const routes: Routes = [
  {
    //ruta principal
    //Si entra a ruta vacia, entrar a componente home
    path:'',
    component: HomeComponent, //componente de inicio
    pathMatch: 'full' // elige la ruta que coincide con la url, cuando no coincida la ruta a una existente se ira por defecto a esta ruta 
  },

  //ruta de registrar usuario/signup 
  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full'

  },

  //ruta de logueo de usuario/login
  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
