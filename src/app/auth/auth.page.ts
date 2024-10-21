import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLgin = true;
  constructor(private authService: AuthService, private router : Router, private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }

  onLogin(){
    this.authService.login();
      this.loadingCtrl.create({keyboardClose:true,message:"logging in..!"}).then(loggingElm => {
        loggingElm.present();
        setTimeout(() => {
          loggingElm.dismiss();
        }, 1500);
      });
      this.router.navigateByUrl("/places/tabs/discover");
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if(this.isLgin){
      this.authService.login();
      this.loadingCtrl.create({keyboardClose:true,message:"logging in..!"}).then(loggingElm => {
        loggingElm.present();
        setTimeout(() => {
          loggingElm.dismiss();
          this.router.navigateByUrl("/places/tabs/discover");
        }, 1500);
      });
     
    }
    else{

    }
      console.log(form);
  }

  onSwitchLogging(){
    this.isLgin = !this.isLgin;
  }

}
