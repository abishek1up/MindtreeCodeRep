import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BoolData } from 'src/app/home/shared/BoolData.model';
import { BaseService } from 'src/app/home/shared/base.service';
import { Router } from "@angular/router"; 
import { PasswordService } from "src/app/home/User-shared/password.service";
import { ToastrService } from 'ngx-toastr';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ForgetDialogComponent } from "src/app/home/login/forget-dialog/forget-dialog.component";
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup} from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Form } from "@angular/forms";
import {FormControl, FormGroupDirective,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  flag: Boolean;
  Pasword: string;
  emailID: string;
  userName: string;
  result:number;
  Admintoken:string="cdd654667r4fd3455678hgfd";
  updateResult:boolean = true;
  loginForm: FormGroup;    
  email:string='';  
  password:string=''; 
  rege=/\S+@\S+\.\S+/;
  constructor(public dialog: MatDialog,private fb: FormBuilder,public base: BaseService, private router: Router, public passwordservice : PasswordService,private toastr: ToastrService) 
  {this.loginForm = fb.group({  
    'email' : new FormControl('', [
      Validators.required,
      Validators.pattern(this.rege)]),
  //  'password' : [null, Validators.required,Validators.minLength(9),Validators.maxLength(16)],   
    'password' : new FormControl('', [
      Validators.required,
      Validators.required,Validators.minLength(9),Validators.maxLength(16)]),
    // 'email':[null, Validators.compose([Validators.required,Validators.email])]
  }); } 
  resetform(form?: NgForm) {
    if (form != null)
      form.reset();
  }
  OnSubmit(form: NgForm) {
    
    if (form.value.email == "admin@mid.com" && form.value.password == "admin12345") 
    {
      localStorage.setItem('adminToken',"cdfv234567897654324567");  
      this.router.navigateByUrl('/admin');
    }
    else
    {
      var concatStr: string;
      concatStr = form.value.email.concat(":");
      concatStr = concatStr.concat(form.value.password);
      this.base.validateUser(concatStr);
     }
  }
 
  openDialog(): void {
    let dialogRef = this.dialog.open(ForgetDialogComponent,{
    });
  }


}
