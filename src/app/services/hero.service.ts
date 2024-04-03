import { Injectable } from '@angular/core';

import { Observable, catchError, map, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HEROES } from '../mock-heroes';
import { MessageService } from './message.service';
import { IHero, Icity, Ielement, Istar, Iweapons } from '../hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private apiUrl = 'http://localhost:3000';
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getHeroes(): Observable<IHero[]> {

    return this.http.get<IHero[]>(`${this.apiUrl}/hero`)
      .pipe(
        tap(_ => this.log('fetch heroes')),
        catchError(this.handleError<IHero[]>('getHeroes', [])),
      )
  }
  getHero(id: number|string): Observable<IHero> {
    const url = `${this.apiUrl}/hero/${id}`;
    return this.http.get<IHero>(url).pipe(
      tap(_ => this.log(`fetch hero id=${id}`)),
      catchError(this.handleError<IHero>(`getHero ${id}`))
    )
  }
  updateHero(hero: IHero): Observable<any> {
    return this.http.patch(`${this.apiUrl}/hero/${hero.id}`, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private log(message: string) {
    this.messageService.add(`hero service : ${message}`)
  }
  addHero(hero: IHero): Observable<IHero> {
    return this.http.post<IHero>(`${this.apiUrl}/hero`, hero, this.httpOptions)
      .pipe(
        tap((newHero: IHero) => this.log(`added hero \w id=${newHero.id}`)),
        catchError(this.handleError<any>('addHero'))
      )
  }
  deleteHero(id: number): Observable<IHero> {
    const url = `${this.apiUrl}/hero/${id}`;

    return this.http.delete<IHero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<IHero>('deleteHero'))
    );
  }
  searchHeroes(term: string): Observable<IHero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<IHero[]>(`${this.apiUrl}/hero/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<IHero[]>('searchHeroes', []))
    );
  }
  getStars(): Observable<Istar[]> {

    return this.http.get<Istar[]>(`${this.apiUrl}/star`)
      .pipe(
        tap(_ => this.log('fetch heroes')),
        catchError(this.handleError<Istar[]>('getStars', [])),
      )
  }
  getStar(id: number): Observable<Istar> {
    const url = `${this.apiUrl}/star/${id}`;
    return this.http.get<Istar>(url).pipe(
      tap(_ => this.log(`fetch star id=${id}`)),
      catchError(this.handleError<Istar>(`getStar ${id}`))
    )
  }
  getElements(): Observable<Ielement[]> {
    return this.http.get<Ielement[]>(`${this.apiUrl}/element`)
      .pipe(
        tap(_ => this.log('fetch element')),
        catchError(this.handleError<Ielement[]>('getHeroes', [])),
      )
  }
  getElement(id: number): Observable<Ielement> {
    const url = `${this.apiUrl}/element/${id}`;
    return this.http.get<Ielement>(url).pipe(
      tap(_ => this.log(`fetch element id=${id}`)),
      catchError(this.handleError<Ielement>(`getElement ${id}`))
    )
  }
  getWeapons(): Observable<Iweapons[]> {
    return this.http.get<Iweapons[]>(`${this.apiUrl}/weapons`)
      .pipe(
        tap(_ => this.log('fetch weapons')),
        catchError(this.handleError<Iweapons[]>('getWeapons', [])),
      )
  }
  getWeapon(id: number): Observable<Iweapons> {
    const url = `${this.apiUrl}/weapons/${id}`;
    return this.http.get<Iweapons>(url).pipe(
      tap(_ => this.log(`fetch weapons id=${id}`)),
      catchError(this.handleError<Iweapons>(`getWeapons ${id}`))
    )
  }
  getCitys(): Observable<Icity[]> {
    return this.http.get<Icity[]>(`${this.apiUrl}/city`)
      .pipe(
        tap(_ => this.log('fetch city')),
        catchError(this.handleError<Icity[]>('getcity', [])),
      )
  }
  getCity(id: number): Observable<Icity> {
    const url = `${this.apiUrl}/city/${id}`;
    return this.http.get<Icity>(url).pipe(
      tap(_ => this.log(`fetch city id=${id}`)),
      catchError(this.handleError<Icity>(`getcity ${id}`))
    )
  }
}