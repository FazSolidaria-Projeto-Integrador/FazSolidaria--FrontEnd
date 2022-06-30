import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-endereco-edit',
  templateUrl: './endereco-edit.component.html',
  styleUrls: ['./endereco-edit.component.css']
})
export class EnderecoEditComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
    //pagina inicia x=0 e y=0
    window.scroll(0,0)

    //  toda vez que a atualiza a pagina ele retorna para a pag de login
    if(environment.token == ''){
      Swal.fire(
        {
          title: 'Sua sessão expirou!',
          text: `Por favor, faça seu login novamente!`,
          icon: 'info',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
          confirmButtonColor: '#75DC36',
          showCancelButton: false,
        });
      this.router.navigate(['/login'])
    }
  }

}
