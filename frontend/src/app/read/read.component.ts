import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
  //reddata to store all products
  readData:any;
  //to display success message
  successmsg:any;
  p:number=1;
  limit:number=10;
  total:any;

  ngOnInit(): void {

    //in this api method will give all data in res and adding that data in readData
    //this.getAllData();
    this.getProducts(this.p);
  }
  //get products 
  getProducts(p:number){
    let offset=(p-1)*this.limit;
    this.service.getProducts(offset,this.limit).subscribe(res=>{
      this.readData=res.data;
      this.total=res.total[0].total;
      console.log(this.total)
    })
  }
  //to get page no 
  getPage(pageNo:number){
    this.p=pageNo;
    this.getProducts(this.p);
  }
//delete record
  deleteId(pid:any){
    let ids=pid
    console.log(pid,"Delete record")
    this.service.deleteData(ids).subscribe((res)=>{
      console.log(res);
      this.successmsg=res.message;
     
      this.getProducts(this.p);
      
      
    })
  }
  // getAllData(){
  //   this.service.getAllData().subscribe((res)=>{
  //     this.readData=res.data;
  //     console.log(res,'<==res');
  //   })
  // }

}
