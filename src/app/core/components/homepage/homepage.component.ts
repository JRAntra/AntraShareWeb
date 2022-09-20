import { JitEmitterVisitor } from '@angular/compiler/src/output/output_jit';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  colorIndicator : number = 0;


  colorBlind: boolean = true


  employerNumber : number = 1;

  displayIndicator = false
  booleanIndicator : boolean = false
  employerList = [
    {name:"JR"},
    {name:"Moe"},
    {name:"David"},
  ]

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    // this.booleanIndicator
  }
  onNavigatingTo(dest: string){
    this.router.navigateByUrl(dest)
  }
  toggleIndicator(){
    this.displayIndicator = !this.displayIndicator;
    this.colorBlind = !this.colorBlind
  }
  addEmployer(){
    this.employerNumber ++;
  }

  addColorCounter(){
    this.colorIndicator ++;
  }


}
