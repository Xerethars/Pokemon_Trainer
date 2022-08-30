import { Component, OnInit } from '@angular/core';
import { genRandomId } from 'src/app/utils/randomPokeId';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.css']
})
export class LandingPage implements OnInit {  

  public idArray: number[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.idArray = genRandomId(3, 898);
  }

  public loginUser(username: string) {
    console.log(username); 
  }

}
