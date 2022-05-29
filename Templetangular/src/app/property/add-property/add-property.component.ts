import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit { 
@ViewChild('Form') addPropertyForm:NgForm | undefined;
  constructor(private router:Router) { }

  ngOnInit() {

  }
 OnBack()
 {
  this.router.navigate(['/'])
 }
 onSubmit(Form:NgForm)
 {
   console.log("congrate","form submiting")
   console.log(this.addPropertyForm)
 }
}
