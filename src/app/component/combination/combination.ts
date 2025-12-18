import { Component } from '@angular/core';
import { Carosel } from "../carosel/carosel";
import { Content } from "../content/content";

@Component({
  selector: 'app-combination',
  imports: [Carosel, Content],
  templateUrl: './combination.html',
  styleUrl: './combination.css',
})
export class Combination {

}
