import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { RecadoModel } from 'src/app/recado.model';
import { RecadosService } from 'src/app/recados.service';

@Component({
  selector: 'app-recados',
  templateUrl: './recados.component.html',
  styleUrls: ['./recados.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class RecadosComponent {
  recado: RecadoModel = new RecadoModel();
  recados: Array<any> = new Array();
  active = 0;

  next() {
    if (this.active >= 0 && this.active < this.recados.length - 1) {
      this.active++;
      console.log(this.active);
    }
  }

  back() {
    if (this.active != 0) {
      this.active--;
      console.log(this.active);
    }
  }

  constructor(
    private recadosService: RecadosService,
    config: NgbCarouselConfig
  ) {}

  ngOnInit() {
    this.listarRecados();
  }

  cadastrar() {
    this.recadosService.cadastrarRecado(this.recado).subscribe(
      (recado) => {},
      (err) => {
        console.log('Erro ao listar', err);
      }
    );
    console.log(this.recado);
  }

  listarRecados() {
    this.recadosService.listarRecados().subscribe(recados => {
        this.recados = recados;
      },err => {
        console.log('Erro ao listar', err);
      }
    );
  }
}
