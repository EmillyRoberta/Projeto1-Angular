import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {
  public restaurantes: Array<Oferta> = []

  constructor(private listaRestaurante:OfertasService) { }

  ngOnInit(): void {
    this.listaRestaurante.getOfertarPorCategoria('restaurante')
    .subscribe((res)=>{
      this.restaurantes = res
    })
  }

}
