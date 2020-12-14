import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from  'rxjs/operators'
import { IProducts } from './../IProducts.interface';
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) {}
  
getAllProperties(SellRent: number):Observable<IProducts[]>{   //i use a pipe and interface to specify the type of array
  return this.http.get('data/properties.json').pipe(
    map(data=>{
      const productsArray:Array<IProducts>=[];
      for (const id in data){
        if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
        productsArray.push(data[id]);}
      }
      return productsArray
    })
  
  )
} 

}
