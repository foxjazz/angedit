import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tedit',
  templateUrl: './tedit.component.html',
  styleUrls: ['./tedit.component.css']
})
export class TeditComponent implements OnInit {

  constructor() { }
data: string;
  ngOnInit(): void {
    this.data = "starting text";
  }
  b1(){
    if (window.getSelection) {
      let stext = window.getSelection().toString();
      let s1 = this.data.indexOf(stext);
      let s2 = s1 + stext.length;
      let len = this.data.length;
      let newtext = this.data.substring(0, s1);
      let suffix = this.data.substring(s2, len);
      newtext += "<b>" + stext + "</b>" + suffix;
      this.data = newtext;



    }
  }
}
