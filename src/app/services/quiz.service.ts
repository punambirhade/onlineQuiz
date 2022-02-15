import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      {
        id: 'data/javascript.json',
        name: 'JavaScript',
        description:
          "Contain 10 question",
        imageUrl: 'assets/images/JS.png',
      },
      {
        id: 'data/aspnet.json',
        name: 'Asp.Net',
        description:
        "Contain 10 question",
        imageUrl: 'assets/images/ASP.png',
      },
      {
        id: 'data/csharp.json',
        name: 'C Sharp',
        description:
        "Contain 10 question",
        imageUrl: 'assets/images/CSHARP.png',
      },
    ];
  }
}
