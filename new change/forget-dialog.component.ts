import { ToastrService } from 'ngx-toastr';
import { PasswordService } from 'src/app/home/User-shared/password.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, Validators} from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Form } from "@angular/forms";
import { NgForm } from '@angular/forms';
import { inject, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from "@angular/router";
import { BaseService } from "src/app/home/shared/base.service";
@Component({
  selector: 'app-forget-dialog',
  templateUrl: './forget-dialog.component.html',
  styleUrls: ['./forget-dialog.component.css']
})
export class ForgetDialogComponent{
  forgotPasswordForm: FormGroup;    
  email:string='';  
  rege=/\S+@\S+\.\S+/;
  result:number; 
  constructor(private fb: FormBuilder,private dialogRef:MatDialogRef<ForgetDialogComponent>,public base: BaseService, private router: Router, public passwordservice : PasswordService,private toastr: ToastrService) {
    
      this.forgotPasswordForm = fb.group({  
        'email' : new FormControl('', [
          Validators.required,
          Validators.pattern(this.rege)]),
      }); }
      
  verifyMail(form:NgForm)
  {
    this.dialogRef.close();
   console.log(form.value.email);
    this.passwordservice.verifyEmail(form.value.email).subscribe(data => {
      this.result = data;
      console.log(data);
      if(this.result==1)
        { 
          this.passwordservice.emailID=form.value.email;
          this.passwordservice.generateOTP(form.value.email).subscribe(data => {
            this.passwordservice.otp = data;
            console.log(this.passwordservice.otp);
            console.log(data);
          });
          console.log(this.result);
          this.router.navigateByUrl('/home/changeotp');
        }
        else{
          this.toastr.error("Given Mail Id is  not registered!!!","Wrong Mail Id",{timeOut:1200})
          } 
    });
    
  }
}
