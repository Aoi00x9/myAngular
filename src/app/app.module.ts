import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FormsModule } from '@angular/forms';
import { GetphotoService } from './services/getphoto.service';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { AlphabetComponent } from './components/alphabet/alphabet.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'
import { LoginService } from './services/login.service'
import { AuthguardGuard } from './authguard.guard'
import { UserManagementService } from './services/user-management.service';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { RegisterComponent } from './components/register/register.component'
import { RegisterService } from './services/register.service'
import { PostService } from './services/post.service'
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { MathematicsComponent } from './components/subjects/mathematics/mathematics.component';
import { EnglishComponent } from './components/subjects/english/english.component';
import { ChemistryComponent } from './components/subjects/chemistry/chemistry.component';
import { PhysicsComponent } from './components/subjects/physics/physics.component';
import { ComputerComponent } from './components/subjects/computer/computer.component';
import { BiologyComponent } from './components/subjects/biology/biology.component'


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home",component: HomeComponent},
  //ลองดูเฉยๆ
  {path:"user",component:UserComponent},
  { path: "biology",component: BiologyComponent},
  { path: "chemistry",component: ChemistryComponent},
  { path: "computer",component: ComputerComponent},
  { path: "english",component: EnglishComponent},
  { path: "mathematics",component: MathematicsComponent},
  { path: "physics",component: PhysicsComponent},
  //{ path: "user", canActivate: [AuthguardGuard],component: UserComponent},
  { path: "aboutme", canActivate: [AuthguardGuard],component: AboutmeComponent},
  {path: 'user-management',canActivate: [AuthguardGuard],component: UserManagementComponent},
  {path: '**',canActivate: [AuthguardGuard],component: LoginComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutmeComponent,
    AlphabetComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserManagementComponent,
    RegisterComponent,
    MathematicsComponent,
    EnglishComponent,
    ChemistryComponent,
    PhysicsComponent,
    ComputerComponent,
    BiologyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    GetphotoService,
    RegisterService,
    LoginService,
    AuthguardGuard,
    UserManagementService,
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
