import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //connect frontend to backend
  
  apiUrl='http://localhost:3000/user';
  apiCategoryUrl='http://localhost:3000/category';
  //apiProductUrl='http://localhost:3000/user';

  //get all data

  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  } 
  
  //get all products

  getProducts(offset:number,limit:number):Observable<any>{
    
    return this._http.get(`${this.apiUrl}/${offset}/${limit}`);
  }

  //create product
  createData(data:any):Observable<any>{
    console.log(data,"<== apicreate")
    return this._http.post(`${this.apiUrl}`,data);
  }

  //delete product
  deleteData(id:any):Observable<any>{
    let ids=id;
    return this._http.delete(`${this.apiUrl}/${ids}`);

  }

  //update product

  updateData(data:any,pid:any):Observable<any>{
    let pids=pid;
    return this._http.put(`${this.apiUrl}/${pids}`,data);
  }

  //get single product
  getSingleData(pid:any):Observable<any>{
    let ids=pid;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }

  //get all categories

  getCategories():Observable<any>{
    return this._http.get(`${this.apiCategoryUrl}`);
  }

  //delete categories

  deleteCat(id:any):Observable<any>{
    let ids=id;
    return this._http.delete(`${this.apiCategoryUrl}/${ids}`)
  }

  //create categories

  createCategories(data:any):Observable<any>{
    return this._http.post(`${this.apiCategoryUrl}`,data);
  }

  //get single category

  getSingleCategory(cid:any):Observable<any>{
    let id=cid;
    return this._http.get(`${this.apiCategoryUrl}/${id}`)
  }

  //update categories

  updateCategories(cid:any,data:any){
    let id=cid;
    return this._http.put(`${this.apiCategoryUrl}/${id}`,data);
  }
}
