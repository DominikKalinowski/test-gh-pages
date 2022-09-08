import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipiesEntity } from './+state/recipies.models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipiesService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://ml-app-valueadd.herokuapp.com/recipes';

  public getRecipies(): Observable<RecipiesEntity[]> {
    return this.http
      .get<RecipiesEntity[]>(this.baseUrl)
      .pipe(tap((value) => console.log(value)));
  }
}
