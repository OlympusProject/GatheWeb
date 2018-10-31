import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

 
let routes = [
    { path: "", redirectTo: "/user-profile", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent},
    {path: "user-profile", component: UserProfileComponent}
];
 
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        UserProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }