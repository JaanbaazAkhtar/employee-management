import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignations():Observable<APIResponse> {
    return this.http.get<APIResponse>("https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllDesignation")
  }
}
