import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { camelCaseSerializer } from '../helpers/utilities/serializer';
import { IBook } from '../interfaces/global.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly API: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<HttpResponse<IBook[]>> {
    return this.http
      .get(`${this.API}/api/v1/books`)
      .pipe(
        map((response: any) => camelCaseSerializer.serialize(response.page)),
      );
  }
}
