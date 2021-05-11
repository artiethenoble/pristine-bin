import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ScreenAreaComponent } from './screen-area/screen-area.component';
import { RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// MDB Angular Free
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ScreenAreaComponent,
    PricingComponent,
    AboutComponent,
    SigninComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path: 'home', component: ScreenAreaComponent, data: {animation: 'homeTransition'}},
      {path: 'about', component: AboutComponent, data: {animation: 'aboutTransition'}},
      {path: 'pricing', component: PricingComponent, data: {animation: 'pricing'}},
      {path: '',  redirectTo: '/home', pathMatch: 'full'},
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent}
    ]),
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
    // MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
