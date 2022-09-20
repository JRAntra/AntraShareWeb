import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit{

  @Input() appChangeColor : number = 0;
  @HostListener('click')
  onClick(){
    const colorList = ["red","yellow","blue","green"]
    console.dir(this.el.nativeElement)
    this.el.nativeElement.style.backgroundColor = colorList[this.appChangeColor]
  }

  constructor(
    private el: ElementRef
  ) { 


  }
  ngOnInit(): void {
    const colorList = ["red","yellow","blue","green"]
    console.dir(this.el.nativeElement)
    this.el.nativeElement.style.backgroundColor = colorList[this.appChangeColor]
    }
}
