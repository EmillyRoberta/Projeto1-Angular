import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {
  public diversao:Array<Oferta> = []

  constructor(private listaDiversao:OfertasService) { }

  ngOnInit(): void {
    this.listaDiversao.getOfertarPorCategoria('diversao')
    .subscribe((res)=>{
        this.diversao = res
    })
  }

}
