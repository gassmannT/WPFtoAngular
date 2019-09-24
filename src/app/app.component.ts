import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './models/model';
import { GameService } from './services/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  countryCode: string;
  games$: Observable<Game[]>;
  selectedItem: Game;

  constructor(private service: GameService) {}

  search() {
    this.selectedItem = null;

    this.games$ = this.service.getGames(this.countryCode);
  }

  showDetail(g: Game) {
    this.selectedItem = g;
  }
}
