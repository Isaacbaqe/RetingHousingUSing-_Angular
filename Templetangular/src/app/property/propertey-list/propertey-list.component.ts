
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../Iproperty.interface';

@Component({
  selector: 'app-propertey-list',
  templateUrl: './propertey-list.component.html',
  styleUrls: ['./propertey-list.component.scss']
})
export class ProperteyListComponent implements OnInit {
 SellRent=1

  Properities:Array<Iproperty> | undefined;

  constructor( private route:ActivatedRoute, private housingservices:HousingService) { }

  ngOnInit(): void {
     if(this.route.snapshot.url.toString())
     {
       this.SellRent=2;
     }
    this.housingservices.getAllProperities(this.SellRent).subscribe(
      data=>{

      this.Properities=data   
         },error=>{
            console.log('htpperror')
             console.log(error)
         })

  }

}
