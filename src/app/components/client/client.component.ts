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
      } else {
        alert(res.message)
      }
    })
  }
}


