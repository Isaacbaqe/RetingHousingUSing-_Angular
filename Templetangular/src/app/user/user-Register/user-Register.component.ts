import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faGalacticRepublic } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-user-Register',
  templateUrl: './user-Register.component.html',
  styleUrls: ['./user-Register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;
  constructor() { }

  ngOnInit() {

    this.registerationForm=new FormGroup({
      userName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmpassword:new FormControl(null,[Validators.required]),
      mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    });

  }
  passwordMatchingValidatior(fg:FormGroup):Validators
  {
    return fg.get('password')?.value===fg.get('confirmpassword')?.value

  }
  onSubmit()
  {
  console.log(this.registerationForm)
  }
}
