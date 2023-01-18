import {DataSource} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface Property {
  name: string;
  numero: number;
}

const ELEMENT_DATA: Property[] = [
  {name: 'Obediência', numero: 3},
  {name: 'Docilidade', numero: 5},
  {name: 'Inteligência', numero: 5},
  {name: 'Tendência ao latir', numero: 2},
  {name: 'Energia', numero: 4},
  {name: 'Apego ao dono', numero: 5},
  {name: 'Amigável', numero: 5},
];

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})

export class BreedComponent {
  displayedColumns: string[] = ['name', 'symbol'];
  dataSource = new ExampleDataSource();

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}

export class ExampleDataSource extends DataSource<Property> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<Property[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Property[]> {
    return this.data;
  }

  disconnect() {}
}
