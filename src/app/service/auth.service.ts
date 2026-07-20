import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILoginUser, IRegisterUser } from '../model/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   AUTH_BASE_URL : string = environment.authBaseUrl

  constructor(private _http:HttpClient) { }

  logout():Observable<any>{
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    return of({
      msg:`Logout Successfully!!!`
    })
  }

login(userDatiles:ILoginUser):Observable<any>{
const LOGIN_URL = `${this.AUTH_BASE_URL}/api/auth/login`
return this._http.post(LOGIN_URL,userDatiles)
}

signUp(userDatiles:IRegisterUser):Observable<any>{
const SIGNUP_URL = `${this.AUTH_BASE_URL}/api/auth/register`;
return this._http.post(SIGNUP_URL,userDatiles)
}

fetchdata():Observable<any>{
  return this._http.get('https://jsonplaceholder.typicode.com/posts')
}

saveToken(token:string){
  localStorage.setItem('token',token)
}

saveUserRole(userRole:string){
  localStorage.setItem('userRole',userRole)
}

getToken():string|null{
 return localStorage.getItem('token')
}

getUserRole():string|null{
 return localStorage.getItem('userRole')
}
}
