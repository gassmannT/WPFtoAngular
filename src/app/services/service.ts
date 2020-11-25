import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private SERVICE_BASE_URL = 'http://footballapi123.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

  public getGames(code: string) {
    return this.http.get<Game[]>(`${this.SERVICE_BASE_URL}/Game?countryCode=${code}`);
  }
}
