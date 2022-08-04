import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {
  public ofertas: Oferta[] | undefined

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(termoDaBusca:string):void{
     this.ofertasService.pesquisaOfertas(termoDaBusca).subscribe((res)=>{
      this.ofertas = res
    })
    console.log(this.ofertas)
  

  }

}
