import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  errormsg:any;
  successmsg:any;
  getparaId:any;
  categories:any;
  selectedValue:any;
  constructor(private service:ApiserviceService,private router:ActivatedRoute) {}

  ngOnInit(): void {
    this.service.getCategories().subscribe(res=>{
      this.categories=res.data;
      console.log(this.categories)
    })

    //getting pid from url parameter
    this.getparaId=this.router.snapshot.paramMap.get('pid');
    //if param pid is present then only input will update
    if(this.getparaId){
      this.service.getSingleData(this.getparaId).subscribe(res=>{
        console.log(res);
        //attaching values to input if update
        this.userForm.patchValue({
          pname:res.data[0].pname,
          pdesc:res.data[0].pdesc,
          cname:res.data[0].cname,
          cid:res.data[0].cid,
        });

      });
    
    }
      }
  //input is stored imside userform values 
  userForm=new FormGroup({
    'pname':new FormControl('',Validators.required),
    'pdesc':new FormControl('',Validators.required),
    'cname':new FormControl('',),
    'cid':new FormControl('',Validators.required)
  });
  
//create new Product
  userSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe(res=>{
        console.log(res,"<== response")
        this.userForm.reset();
        this.successmsg=res.message;
        console.log(this.successmsg,"succesmessage")
      })

    }
    else{
      this.errormsg="All fields are required"
      console.log("Please all fill fields")
    }
  }

  //Update Product
  userUpdate(){
    console.log(this.userForm.value,"<=Values")
    if(this.userForm.valid){
      this.service.updateData(this.userForm.value,this.getparaId).subscribe(res=>{
        console.log(res,"<==res update")
        this.successmsg=res.message;

      });
    }else{
      this.errormsg="All Fields are required";
    }
  }
}
