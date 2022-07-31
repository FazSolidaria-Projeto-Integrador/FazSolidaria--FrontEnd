import { Component, OnInit } from '@angular/core';
import eruda from 'eruda';
import { OwlOptions } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-tela-apresentacao',
  templateUrl: './tela-apresentacao.component.html',
  styleUrls: ['./tela-apresentacao.component.css'],
})



export class TelaApresentacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0
    // let el = document.createElement('div');
    // document.body.appendChild(el);

    // eruda.init({
    //   container: el,
    //   tool: ['console', 'elements']
    // });
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}





