import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import {Router} from "@angular/router"
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

constructor(private api:ApiService, private router: Router){
  
}

  cat:any=""
  addCat(val:any){

    var fd = new FormData();
    fd.append("cname",val.name);

    this.api.inscat(fd).subscribe((data:any)=>{
      this.router.navigate(['/list-category'])
    })
    
  }
 
}
