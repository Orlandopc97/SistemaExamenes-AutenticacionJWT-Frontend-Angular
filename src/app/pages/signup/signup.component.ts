import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'; //importacion de sweetalert
import { Validators } from '@angular/forms';
//Inscribirse(usuario)

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  public user = {
    nombre : '',
    apellido : '',
    email : '',
    username : '',
    password : '',
    telefono : ''
  }
              //Inyecciones 
              //Inyeccion del usuario service   
  constructor(private userService : UserService, private snackBar : MatSnackBar ){ }

  ngOnInit(): void {
      
  }

  //Metodo formSubmit para ver su nombre de usuario esta vacio o nulo
  formSbmit(){
    console.log(this.user);//imprimir el usuario del formulario

    //nombre requerido
     if(this.user.nombre == '' || this.user.nombre == null){ //Mostrar alerta si el usuario esta vacio o es null
                    //abrir una ventana //Con un boton de Aceptar //{propiedades del snackbar}       //alert('El nombre del usuario es requerido'); cambiar por snackbar
      this.snackBar.open('El nombre es requerido', 'Aceptar',{
          duration : 3000, //milisegundos
          verticalPosition : 'top',//posicion vertical arriba
          horizontalPosition : 'center'//posicion orizontal a la derecha
      });
      return;
    }

    //apellido requerido
    if(this.user.apellido == '' || this.user.apellido == null){ //Mostrar alerta si el usuario esta vacio o es null
                    //abrir una ventana //Con un boton de Aceptar //{propiedades del snackbar}       //alert('El nombre del usuario es requerido'); cambiar por snackbar
      this.snackBar.open('El apellido es requerido', 'Aceptar',{
          duration : 3000, //milisegundos
          verticalPosition : 'top',//posicion vertical arriba
          horizontalPosition : 'center'//posicion orizontal a la derecha
      });
      return;
    }

    //Email requerido
    if(this.user.email == '' || this.user.email == null){ //Mostrar alerta si el usuario esta vacio o es null
                    //abrir una ventana //Con un boton de Aceptar //{propiedades del snackbar}       //alert('El nombre del usuario es requerido'); cambiar por snackbar
      this.snackBar.open('El email es requerido', 'Aceptar',{
          duration : 3000, //milisegundos
          verticalPosition : 'top',//posicion vertical arriba
          horizontalPosition : 'center'//posicion orizontal a la derecha
      });
      return;
    }

    //username requerido
    if(this.user.username == '' || this.user.username == null){ //Mostrar alerta si el usuario esta vacio o es null
                    //abrir una ventana //Con un boton de Aceptar //{propiedades del snackbar}       //alert('El nombre del usuario es requerido'); cambiar por snackbar
      this.snackBar.open('El nombre de usuario es requerido', 'Aceptar',{
          duration : 3000, //milisegundos
          verticalPosition : 'top',//posicion vertical arriba
          horizontalPosition : 'center'//posicion orizontal a la derecha
      });
      return;
    }

    //contraseña requerida
    if(this.user.password == '' || this.user.password == null){ //Mostrar alerta si el usuario esta vacio o es null
                    //abrir una ventana //Con un boton de Aceptar //{propiedades del snackbar}       //alert('El nombre del usuario es requerido'); cambiar por snackbar
      this.snackBar.open('La contraseña es requerida', 'Aceptar',{
          duration : 3000, //milisegundos
          verticalPosition : 'top',//posicion vertical arriba
          horizontalPosition : 'center'//posicion orizontal a la derecha
      });
      return;
    }

    //Telefono requerido
    if(this.user.telefono == '' || this.user.telefono == null){ //Mostrar alerta si el usuario esta vacio o es null
                    //abrir una ventana //Con un boton de Aceptar //{propiedades del snackbar}       //alert('El nombre del usuario es requerido'); cambiar por snackbar
      this.snackBar.open('El teléfono es requerido', 'Aceptar',{
          duration : 3000, //milisegundos
          verticalPosition : 'top',//posicion vertical arriba
          horizontalPosition : 'center'//posicion orizontal a la derecha
      });
      return;
    }
    
    
    //Metodo registrar usuario
    //llamada a metodo registrar usuario del service user
        //El api rest retornara un observable// a lo cual se tiene que subscribir             
    this.userService.registrarUsuario(this.user).subscribe(//Como se subscribe puede ver todo el objeto usuario que retorna desde el backend
      (data) => {
        console.log(data);//Mostrar en consola                
                  //titulo              //mensaje                                 //indicar que es de exito
        Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema','success')
                                                    /*imprimir en consola
                                                    console.log(data);
                                                    alert("Usuario guardado con exito!")
                                                    */
      },(error) => {
        console.log(error);//Mostrar en consola
        this.snackBar.open('Ha ocurrido un error en el sistema', 'Aceptar',{
          duration : 3000, //milisegundos
      });

                                                    /*imprimir el error en consola
                                                    console.log(error);
                                                    alert('Ha ocurrido un error en el sistema')
                                                    */
      }
    )
  }
  /*(ejemplo una lista)
          Patron de diseño observador
          OBSERVABLE: Es el conjunto de datos----------------------------------> OBSERVER: observador que actua escuchando esos datos
          Contiene datos									Actuan suscribiendose a algun elemento "dato" de el observable y pueden realizar una acción */
}
