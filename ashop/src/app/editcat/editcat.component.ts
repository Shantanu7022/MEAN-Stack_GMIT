import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrls: ['./editcat.component.css']
})
export class EditcatComponent {
id:any="";
cats:any={};
constructor(private router: Router,private route:ActivatedRoute,private api:ApiService){}


  editcatdata(val:any){

    var fd = new FormData();
    fd.append("cname",val.name);
    fd.append("id",this.id)

    this.api.updcat(fd).subscribe((data:any)=>{
      this.router.navigate(['/list-category'])
    })
    
  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')

    var fd=new FormData();
    fd.append("id",this.id);

    this.api.geteditcat(fd).subscribe((data:any)=>{
      this.cats=data;
    })
  
  }

}
