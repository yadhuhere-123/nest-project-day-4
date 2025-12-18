import { Component, OnInit } from '@angular/core';
import { Navbar } from "../../component/navbar/navbar";
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../component/card/card';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails implements OnInit{
  product:any;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(()=>{
      if(history.state&&history.state.product){
        this.product=history.state.product;
      }
    })
  }
}


