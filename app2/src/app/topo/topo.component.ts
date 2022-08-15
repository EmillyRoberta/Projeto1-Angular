import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]> | undefined;
  private subjectPesquisa: Subject<string> = new Subject<string>();
  public ofertas2: Oferta[] | undefined

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), //executa a ação do switchMap após 1 segundo
      distinctUntilChanged(), //evita que ele fique fazendo outra requisição pelo mesmo termo
      switchMap((termoBusca) => {
        if (termoBusca.trim() === '') {
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termoBusca);
      }),
    );
    this.ofertas.subscribe((ofertas) => {
      this.ofertas2 = ofertas
    });
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }
}
