import { HttpClient } from '@angular/common/http'; ////importacion de httpClient
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
              /*inyeccion de hhtpClient  */
                      //Propiedad http client
  constructor(private httpClient : HttpClient) { }

  //Crear Método registrar usuario
                          //user de tipo any "cualquiera"
  public registrarUsuario(user : any){
    //Retornar una petición post "enviar"
                                //url:(http://localhost:8080/usuario), objeto usuario         
    return this.httpClient.post(`${baseUrl}/usuarios/`,user);


  }
}

/* Inyectar el Http Client // Inyeccion de dependencias */ 