import { Component, OnInit } from '@angular/core';
import { PasswordService } from "src/app/home/User-shared/password.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-changeotp',
  templateUrl: './changeotp.component.html',
  styleUrls: ['./changeotp.component.css']
})
export class ChangeotpComponent implements OnInit {
  newPasword:string;
  confirmNew:string;
  otpGen:string;
  otpField=false;
  otpError=false;
  fieldDisable=true;
  buttonDisable=true;
  smallValue1=true;
  smallValue2=true;
  updateResult=true;
  result:string;
  constructor(public passwordservice : PasswordService, public router : Router,private toastr:ToastrService) { }

  ngOnInit() {
  }

  verifyOTP()
  {
      if(this.otpGen==this.passwordservice.otp)
      {
        this.fieldDisable=false;
        this.smallValue1=false;
        this.smallValue2=true;
        this.otpField=true;
        this.otpError=true;
        console.log("done!!");
      }
      else
      {
        this.smallValue1=true;
        this.smallValue2=false;
      }
      
  }

  checkPasswords()
  {
    if(this.newPasword==this.confirmNew)
        this.buttonDisable=false;
  }

  updatePassword()
  {
    if(this.newPasword==this.confirmNew)
      this.passwordservice.updatePasswordByOTP(this.newPasword).subscribe(data => {
        this.result = data.toString();
        console.log(data);
        if(this.result=='1' || this.result=='0')
          {
            this.updateResult=false;
            this.toastr.info("Password successfully updated!!.",'Password updation success!')              
            this.router.navigateByUrl('/home/Login');
          }
        else
        {
          this.toastr.info("Password is not updated!! Please try with other password.",'Password updation failed!')
          
        }
      });
    else
      console.log(" no match");
    
  }

}
