import { Component, OnInit } from '@angular/core';
import { AlertifyService } from './../services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinUser: string;

  constructor(private alertifyservice:AlertifyService,private router:Router) { }

  ngOnInit(): void {
  }
  loggedin(){
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }
  onLogout(){
    localStorage.removeItem('token');
    this.alertifyservice.success("You are logged out !");
    this.router.navigate(['/'])
  }

}
