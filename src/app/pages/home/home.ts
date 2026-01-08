import { Component } from '@angular/core';
import { Card } from '../../component/card/card';
import { Carosel } from '../../component/carosel/carosel';
import { Footer } from '../../component/footer/footer';
import { Navbar } from '../../component/navbar/navbar';
import { Contact } from "../contact/contact";
import { Combination } from "../../component/combination/combination";

@Component({
  selector: 'app-home',
  imports: [ Carosel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
