import { Component, OnInit } from '@angular/core';
/*import { HttpClient} from '@angular/common/http';*/ //if i use http client without using services
import { HousingService } from './../services/housing.service';
import { IProducts } from './../IProducts.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Array<IProducts>;   /*when i provide http*/
  SellRent = 1;
  constructor(private route:ActivatedRoute,private housingservice:HousingService) { } //constructor(private http:Httpclient)
  

  /*products:any=[{
    id:1,
    name:"Qwe",
    type:"zxc",
    value:12000
  },
{                                //without using httpclient
  id:2,
  name:"Lkj",
  type:"fghj",
  value:15000

},
{
  id:3,
  name:"Poi",
  type:"cvbnm",
  value:25000

},
{
  id:4,
  name:"Asd",
  type:"wert",
  value:22000

},
{
  id:5,
  name:"Asgfh",
  type:"Bfgfdt",
  value:18000

}]*/

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }

      this.housingservice.getAllProperties(this.SellRent).subscribe(
        data=>{
          this.products=data;

        }
      );
    



    /*
    this.http.get('data/properties.json').subscribe(data => {this.products = data}
      );*/
    
  }

}
