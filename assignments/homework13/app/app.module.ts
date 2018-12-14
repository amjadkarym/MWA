import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { LazyModule } from './lazy/lazy.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { DataService } from './services/data.service';
import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
     { path: '', component: HomeComponent },
     { path: 'users', loadChildren: './users/users.module#UsersModule'},
     { path: 'error', component: ErrorComponent }

    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
