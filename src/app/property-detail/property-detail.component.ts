import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyid:number;

  constructor(private route:ActivatedRoute,private router:Router) { } /*use activated route to show the route where we are*/

  ngOnInit() {
    this.propertyid=+this.route.snapshot.params["id"]; /*used for activated route....also i use + sign to increment the id..
    if it is not used here the id shows like string*/

    this.route.params.subscribe(    
      (params)=>{                     /*it will provided for pagination...when click on pagination it will
                                        change the id number*/
        this.propertyid=+params['id']
      }
    )
  }
  onSelectNext(){
    this.propertyid+=1;
    this.router.navigate(['propertydetail',this.propertyid])

  }

}
