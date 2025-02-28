import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/class/Client';
import { APIResponse, IEmployee } from '../../models/interface/role';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  
  projectForm: FormGroup = new FormGroup({
      clientProjectId: new FormControl(0),
      projectName: new FormControl("", [Validators.required, Validators.minLength(4)]),
      startDate: new FormControl(""),
      expectedEndDate: new FormControl(""),
      leadByEmpId: new FormControl(""),
      completedDate: new FormControl(""),
      contactPerson: new FormControl(""),
      contactPersonContactNo: new FormControl(""),
      totalEmpWorking: new FormControl(""),
      projectCost: new FormControl(""),
      projectDetails: new FormControl(""),
      contactPersonEmailId: new FormControl(""),
      clientId: new FormControl("")
  })

  clientService = inject(ClientService)
  clientList: Client[] = []
  employeeList: IEmployee[] = []

  ngOnInit(): void {
    this.getAllEmployees()
    this.getAllClients()
  }

  getAllEmployees() {
    this.clientService.getAllEmployees().subscribe((res: APIResponse) => {
      this.employeeList = res.data;
    })
  }

  getAllClients() {
    this.clientService.getAllClient().subscribe((res: APIResponse) => {
      this.clientList = res.data;
    })
  }

  onClickSave() {
    const formValue = this.projectForm.value
    this.clientService.addUpdateClientProject(formValue).subscribe((res: APIResponse) => {
      alert("New Client Project Created")

    })
  }
}
