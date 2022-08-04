import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer, Subscriber, Subscription } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { interval } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta:Oferta[] = []


  constructor(private route:ActivatedRoute, private ofertasService:OfertasService) { }

  ngOnInit(): void {
    
    // this.route.params.subscribe((parametro:any)=>{ //quando altera a rota, ele executa uma acao 
    //   console.log(parametro.id)
    // })
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
    .subscribe((res)=>{
      this.oferta = res
    })
console.log(this.oferta)
    // this.route.params.subscribe((resposta)=>{

    // })
  }

  ngOnDestroy(): void {
  
  }


}
