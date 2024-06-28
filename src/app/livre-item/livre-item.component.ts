import {Component, Input} from '@angular/core';
import {Livre} from "../modules/livre";
import {Router} from "@angular/router";

@Component({
  selector: 'app-livre-item',
  templateUrl: './livre-item.component.html',
  styleUrls: ['./livre-item.component.css']
})
export class LivreItemComponent {
  @Input() livre! : Livre;



  constructor(private router : Router) {
  }
}
