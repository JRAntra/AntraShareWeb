import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileServiceService } from '../../service/profile-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {

  constructor(private ps: ProfileServiceService,
    private ar : ActivatedRoute,
    private router : Router) { }

  username = new FormControl("")
  password = new FormControl("")


  user: FormGroup  =  new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  })

  ngOnInit(): void {
    this.ar.paramMap.subscribe(res=>console.log(res.get('username')))
    const indicator = this.ar.snapshot.data['strictMode']
    console.log(indicator);
    

  }
  changeName(){
    this.router.navigateByUrl("profile/999")
   }

}
