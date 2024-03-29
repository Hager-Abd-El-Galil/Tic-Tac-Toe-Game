import { Component } from '@angular/core';
import { GameService } from './Services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic-Tac-Toe-Game';
  constructor(public gameService: GameService){}

  resetGame(){
    this.gameService.newGame();
  }

}
