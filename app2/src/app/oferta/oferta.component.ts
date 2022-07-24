import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta:Array<Oferta> = []


  constructor(private route:ActivatedRoute, private ofertasService:OfertasService) { }

  ngOnInit(): void {
    
    // this.route.params.subscribe((parametro:any)=>{ //quando altera a rota, ele executa uma acao 
    //   console.log(parametro.id)
    // })
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
    .subscribe((res)=>{
      this.oferta = res

    })

  }


}
