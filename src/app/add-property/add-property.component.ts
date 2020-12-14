import { Component, OnInit } from '@angular/core'; //add Viewchild for here
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  //add @viewchild('Form') addpropertyForm:NgForm

  constructor(private router:Router) { } //navigate back in to where we want


  ngOnInit() {
  }
 /* onBack(){
    this.router.navigate(['/']);
  }*/
  onSubmit(Form:NgForm){
    console.log(Form) //instead of this we can add console.log(addpropertyForm)

  }

}
