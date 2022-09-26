import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  isLoggedIn = true;
  isAdmin = true;
  ngOnInit(): void {
  }

  navigateTo(addr: string){
    this.router.navigateByUrl(addr)
  }

}
