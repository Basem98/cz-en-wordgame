import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ChangedTitleComponent } from '../game/components/changed-title/changed-title.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  // url: string = 'http://localhost:5000';
  headers: HttpHeaders = new HttpHeaders()
    .set("Authorization", `Bearer ${sessionStorage.getItem("JWT")}`);

  constructor(private http: HttpClient, private newDialog: MatDialog) { }

  getWordsForGame(lang): Promise<any> {
    return this.http.post(
      `/getrandomwords/${lang}`,
      {userId: JSON.parse(sessionStorage.getItem('currentUser'))['_id']},
      { headers: this.headers }
    ).pipe(map((response: any) => {
      const randomWords = response.chosenWords.map(word => {
        return { word: word.word, meaning: word.meaning, lang: word.lang };
      });
      return randomWords;
    })).toPromise();
  }

  updateGameInfo(newGameInfo: { id: string, score: number }): Promise<any> {
    return this.http.put(
      '/updategameinfo',
      newGameInfo,
      { headers: this.headers }
    ).pipe(map((response: any) => {
      if (response.success) {
        const oldTitle = JSON.parse(sessionStorage.getItem('currentUser'))['title'];
        const newTitle = response.currentUser.title;
        sessionStorage.removeItem('currentUser');
        sessionStorage.setItem('currentUser', JSON.stringify(response.currentUser));
        if (oldTitle !== newTitle) {
          this.newDialog.open(ChangedTitleComponent, {
            width: '700px',
            disableClose: true
          });
        }
        return response.currentUser.score;
      };
    })).toPromise();
  }

  updateGameHistory(newGameHistory: { id: string, newWord: string }): Promise<any> {
    return this.http.put(
      '/updategamehistory',
      newGameHistory,
      { headers: this.headers }
    ).pipe(map((response: any) => {
      if (response.success) {
        sessionStorage.removeItem('currentUser');
        sessionStorage.setItem('currentUser', JSON.stringify(response.currentUser));
        return response.currentUser.gameHistory;
      }
    })).toPromise();
  }

  getTopTen(): Promise<any> {
    return this.http.get(
      '/gettopten',
      { headers: this.headers }
    ).pipe(map((response: any) => {
      if (response && response.success) {
        return response.topTenUsers;
      }
    })).toPromise();
  }


}
