import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'HankPym'];
  heroesborrados:string = '';

  borrarHeroe(){
    console.log('borrando...')
    let heroeborrado = this.heroes.shift();
    this.heroesborrados = heroeborrado || '';
  }
}
