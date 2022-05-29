import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProperteyListComponent } from './property/propertey-list/propertey-list.component';
import { PropertyCardComponent } from './property/property-card/property-card/property-card.component';
import{HttpClientModule}from'@angular/common/http'
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import{Routes,RouterModule} from '@angular/router'
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-Register/user-Register.component';


const appRouter:Routes=[
  {path:'',component:ProperteyListComponent},
  {path:'rent-property',component:ProperteyListComponent},
  {path:'add-property' ,component:AddPropertyComponent},
  {path:'property-detail/:id',component:PropertyDetailsComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'user/register',component:UserRegisterComponent},
  {path:'**',component:ProperteyListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
     PropertyCardComponent,
     ProperteyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailsComponent,
      UserLoginComponent,
      UserRegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
