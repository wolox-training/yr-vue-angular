import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthUser, IUser } from 'src/app/interfaces/global.interface';
import { environment } from '../../environments/environment';
import { snakeCaseSerializer } from '../helpers/utilities/serializer';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createUser(user: IUser): Observable<HttpResponse<object>> {
    user.locale = 'en';
    return this.http.post(
      `${this.API}/api/v1/users`,
      snakeCaseSerializer.serialize(user),
      {
        observe: 'response',
      },
    );
  }

  login(user: IUser) {
    return this.http.post(
      `${this.API}/api/v1/users/sign_in`,
      snakeCaseSerializer.serialize(user),
      {
        observe: 'response',
      },
    );
  }

  setToken(token: IAuthUser): void {
    localStorage.setItem('userToken', JSON.stringify(token));
  }

  logOut() {
    localStorage.removeItem('userToken');
  }

  isLogged(): boolean {
    return !!localStorage.getItem('userToken');
  }

  getToken(): IAuthUser {
    const token: string = localStorage.getItem('userToken') || '';
    return (
      JSON.parse(token) || {
        token: '',
        client: '',
        uid: '',
      }
    );
  }
}
