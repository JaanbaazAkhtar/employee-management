import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/interface/role';
import { environment } from '../../environments/environment';
import { Client } from '../models/class/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly apiUrl;
  constructor(private http: HttpClient) { 
    this.apiUrl = environment.API_URL
  }

  getAllClient():Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.apiUrl}/GetAllClients`)
  }

  getAllEmployees():Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.apiUrl}/GetAllEmployee`)
  }

  addUpdateClient(obj: Client):Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.apiUrl}/AddUpdateClient`, obj)
  }

  deleteClientById(id: number):Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.apiUrl}/DeleteClientByClientId?clientId=${id}`)
  }

  addUpdateClientProject(obj: Client):Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.apiUrl}/AddUpdateClientProject`, obj)
  }
}
