import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-readcat',
  templateUrl: './readcat.component.html',
  styleUrls: ['./readcat.component.css']
})
export class ReadcatComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
  readData:any;
  successmsg:any;
  ngOnInit(): void {
   this.getAllCat();
  }
  //delete categories 
  deleteCat(cid:any){
    let id=cid
    this.service.deleteCat(id).subscribe(res=>{
      this.successmsg=res.message;
      this.getAllCat();
    })
  }
  //get categories to readData
  getAllCat(){
    this.service.getCategories().subscribe(res=>{
      this.readData=res.data;
      console.log(this.readData)
    })
  }
}
