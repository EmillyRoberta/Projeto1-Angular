import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit {


  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.snapshot.params['id'] 
    // this.route.params.subscribe((parametro:any)=>{ //quando altera a rota, ele executa uma acao 
    //   console.log(parametro.id)
    // })
  }

}
