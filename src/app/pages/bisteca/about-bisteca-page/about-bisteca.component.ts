import { DataSource } from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { ExampleDataSource } from '../../breed/breed/breed.component';

export interface PropertyComponent {
  name: string;
  numero: number;
}

const ELEMENT_DATA: PropertyComponent[] = [
  {name: '', numero: 1},
  {name: 'Obediência', numero: 3},
  {name: 'Docilidade', numero: 5},
  {name: 'Inteligência', numero: 5},
  {name: 'Tendência ao latir', numero: 2},
  {name: 'Energia', numero: 4},
  {name: 'Apego ao dono', numero: 5},
  {name: 'Amigável', numero: 5},
];

@Component({
  selector: 'app-about-bisteca',
  templateUrl: './about-bisteca.component.html',
  styleUrls: ['./about-bisteca.component.scss']
})

export class AboutBistecaComponent {
  displayedColumns: string[] = ['name', 'symbol'];
  dataSource = new ExampleDataSource();

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}

