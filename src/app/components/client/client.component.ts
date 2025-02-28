import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../models/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponse } from '../../models/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  clientObj: Client = new Client();

  clientList: Client[] = []

  clientService = inject(ClientService)

  ngOnInit(): void {
    this.loadClient()
  }

  loadClient() {
    this.clientService.getAllClient().subscribe((res: APIResponse) =>{
      this.clientList = res.data
    })
  }

  onClickSave() {
    this.clientService.addUpdateClient(this.clientObj).subscribe((res: APIResponse) =>{
      if(res.result) {
        alert("Client Created Successfully")
        this.loadClient()
        this.clientObj = new Client()
      } else {
        alert(res.message)
      }
    })
  }

  onDelete (clientId: number) {
    const isDelete = confirm("Are you sure??")
    if(isDelete) {
      this.clientService.deleteClientById(clientId).subscribe((res: APIResponse) => {
        if(res.result) {
          alert("Client Deleted")
          this.loadClient()
        } else {
          alert("The client could not be deleted")
        }
      })
    }
  }

  onEdit(client: Client) {
    this.clientObj = client
  }
}


