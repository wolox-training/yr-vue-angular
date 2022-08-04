import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/global.interface';
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
    const headers = 'headers made with HttpHeaders';

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
}
