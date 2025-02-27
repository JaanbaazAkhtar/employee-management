import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponse, IDesignation } from '../../models/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  masterService = inject(MasterService)
  designationList: IDesignation[] = []
  isLoading = true

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((res: APIResponse) => {
      this.designationList = res.data
      this.isLoading = false
    }, error=>{
      console.log('API Error')
    })
  }
}
