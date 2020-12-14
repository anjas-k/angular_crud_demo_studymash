import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from './../../services/user-service.service';
import { User } from './../../user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user:User;
  userSubmitted: boolean; //when clicking save it show fill fileds.so declare a variable here
  constructor(private fb:FormBuilder,
              private userService:UserServiceService, 
              private alertifyservice:AlertifyService,
              private router:Router) { } /*use formbuilder in constructor for local storage,
                                                             also used without local storage     */

  ngOnInit() {
    /*this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchingValidatior);*/
    this.CreateRegistrationForm();
  }

  passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notmatched: true};
  }


  CreateRegistrationForm(){    //its for local storage or without local storage we can use it
    this.registerationForm=this.fb.group({
      userName:[null,Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]


    },{Validators:this.passwordMatchingValidatior})

  }

  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }
  // ------------------------

  onSubmit() {
    this.userSubmitted=true;
    console.log(this.registerationForm.value);
    if (this.registerationForm.valid){       /*add data in to local storage*/
   //this.user = Object.assign(this.user, this.registerationForm.value);
    this.userService.addUser(this.userData()); //if userdata is not defined use user
    this.registerationForm.reset();
    this.userSubmitted=false;
    this.alertifyservice.success('Congrats, you are successfully registered and please login ');
      this.router.navigate(['/user/login'])
  } else {
      this.alertifyservice.error('Kindly provide the required fields');
  }
    
    
  }
  userData(): User {    /*userdata take value from the user.so we commended that object section*/ 
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
  

  
}