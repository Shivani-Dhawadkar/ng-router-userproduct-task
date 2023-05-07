import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 isvalue : boolean =true
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  onclicklogout(){
 this._router.navigate(['/'])
  }

}
