import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.css']
})
export class GameHistoryComponent {
  wordsList: any = JSON.parse(sessionStorage.getItem('currentUser'))['gameHistory'];
  filteredWordsList: any = this.wordsList;

  constructor() { }

  filterByWordOrLanguage(specificWord?, specificLang?) {
    if (specificLang == 'cz' || specificLang == 'en') {
      this.filteredWordsList = this.wordsList.filter(wordObject => { return wordObject.lang.includes(specificLang); });
    } else {
      this.filteredWordsList = this.wordsList;
    }

    if (specificWord) {
      this.filteredWordsList = this.wordsList.filter(wordObject => { return wordObject.word.includes(specificWord); });
    }
  }
}
