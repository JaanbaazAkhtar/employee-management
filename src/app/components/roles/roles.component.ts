import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { APIResponse, IRole } from '../../models/interface/role';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  firstName: string = "Jaanbaaz";
  http = inject(HttpClient);
  roleList: IRole [] = [];
  ngOnInit(): void {
    this.getAllRoles()
    // alert('Hi')
  }

  getAllRoles() {
    this.http.get<APIResponse>("https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllRoles").subscribe((res: APIResponse) => {
      this.roleList = res.data
    })
  }
}
