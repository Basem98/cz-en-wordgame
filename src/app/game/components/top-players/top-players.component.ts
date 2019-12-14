import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
  topPlayers:any;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getTopPlayers();
  }

  async getTopPlayers() {
    this.topPlayers = await this.gameService.getTopTen()
  }
}
