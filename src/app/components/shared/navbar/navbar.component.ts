import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  @ViewChild ('buscarTexto') buscarTexto!:ElementRef;

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  buscarHeroe( termino:string ){
     console.log('Buscar con ViewChild: '+this.buscarTexto.nativeElement);
    this.router.navigate( ['/buscar',termino] );
  }

}
