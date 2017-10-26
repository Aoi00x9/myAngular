import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FormsModule } from '@angular/forms';
import { GetphotoService } from './services/getphoto.service';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { AlphabetComponent } from './components/alphabet/alphabet.component'

const appRoutes:Routes = [
  {path:"", component:UserComponent},
  {path:"about", component:AboutmeComponent},
  {path:"alphabet", component:AlphabetComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutmeComponent,
    AlphabetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetphotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
