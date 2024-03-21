import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://localhost:8085/api/v1/users'

  constructor(private htttpClient:HttpClient) { }

  getUserById(id:number):Observable<User>{
    //return this.htttpClient.get<User>(this.apiUrl+'/'+id);
    return this.htttpClient.get<User>(`${this.apiUrl}/${id}`);
  }

}
