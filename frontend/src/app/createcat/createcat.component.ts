import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-createcat',
  templateUrl: './createcat.component.html',
  styleUrls: ['./createcat.component.css']
})
export class CreatecatComponent implements OnInit {

  cname:any;
  getparacid:any;
  successmsg:any;
  errormsg:any;

  constructor(private service:ApiserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getparacid=this.route.snapshot.paramMap.get('cid');
    if(this.getparacid){
      
      this.service.getSingleCategory(this.getparacid).subscribe(res=>{
        this.cname=res.data[0].cname;
        console.log(res)
        console.log(this.cname);
      })
    }
  }
  addCat(){
    console.log(this.cname,'cname');
    if(this.cname){
      this.service.createCategories({cname:this.cname}).subscribe(res=>{
        console.log(res,"<==res");
        this.successmsg=res.message;
      })
    }else{
      this.errormsg="all fields are required"
    }
  }updateCat(){
    if(this.cname){
      this.service.updateCategories(this.getparacid,{cname:this.cname}).subscribe(res=>{
      console.log(res);
      this.successmsg="Category Updated Succesfully!"
      

      })
    }else
      this.errormsg="all fields are required"
  }

 
}
