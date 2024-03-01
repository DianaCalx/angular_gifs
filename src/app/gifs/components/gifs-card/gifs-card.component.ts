import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css',
})
export class GifsCardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  //Es un metodo que se implementa en la inicializacion del componente
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
