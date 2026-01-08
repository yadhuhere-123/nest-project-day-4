import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Service } from '../../service';
import { Router, RouterLink } from "@angular/router";
import { Productdetails } from '../../pages/productdetails/productdetails';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {

cards :any[]=[]
constructor(private api_service:Service,private cdr:ChangeDetectorRef,private router: Router) { } 
 ngOnInit(): void {
   this.api_service.getProducts().subscribe((data:any)=>{
    this.cards=data.recipes;
    // console.log(data);
    this.cdr.detectChanges();
   })
 }
 getproductdetails(product:any){
  this.router.navigate(['/product',product.id], { state: { product } })
 }
}
