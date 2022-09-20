import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NewsfeedStory, UserInfo } from './shared/models/newsfeed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(){
    
  }
  // counter = 0;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // const name = "JR"
    // const userInfo: UserInfo = { name: "JR", admin: true};
    // const news : NewsfeedStory = {
    //     userInfo:userInfo,
    //     publisherName : name,
    //     publishedTime : "2022",
    //     commentNumber : 100
    // }
    
  }


  // title = 'AntraShareWeb';
  // inputValue = "This is the value of the input"
  // obj = {
  //   name: "JR"
  // }
  // name = "JR"

  // counter = new FormControl(0)


  // onMinus() {
  //   this.counter.setValue(this.counter.value - 1)
  //   this.logInput()
  // }
  // onPlus() {
  //   this.counter.setValue(this.counter.value + 1)

  // }





  // onClick(event: Event) {
  //   console.log(event)
  //   // window.alert(event)
  // }
  // userInput(event: Event) {
  //   console.log(event);
  // }
  // logInput() {
  //   console.log(this.counter)
  // }
}
