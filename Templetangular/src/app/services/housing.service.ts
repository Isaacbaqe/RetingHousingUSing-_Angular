import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map}from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Iproperty } from '../property/Iproperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }
getAllProperities(SellRent:number):Observable<Iproperty[]>
{
  return this.http.get('data/properties.json').pipe(
   map(data => {
     const PropertiesArray: Array<any>=[];
      for(let item in data){
       if(data.hasOwnProperty(item)  )
       {
       PropertiesArray.push(data[item as keyof typeof data]);
       }
     }
     return PropertiesArray;
   })
 );
}
}
