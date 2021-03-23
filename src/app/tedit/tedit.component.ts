import { Component, OnInit } from '@angular/core';
import {tlinkData} from "./Itlink";

@Component({
  selector: 'app-tedit',
  templateUrl: './tedit.component.html',
  styleUrls: ['./tedit.component.css']
})
export class TeditComponent implements OnInit {
  showLink: boolean;
  selectedText: string;
  constructor() { this.showLink = false; }
data: string;
  ngOnInit(): void {
    this.data = "starting text";
  }
    b1() {
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
    linkBtn(){

      this.selectedText = window.getSelection().toString();
      this.data = this.data.replace(this.selectedText, '');
      this.showLink = true;
    }
    onLink(event: tlinkData){
        let tag = '<a href=" + event.Url + ">' + event.displayText + '</a>';
        let stext = window.getSelection().toString();

        let s1 = this.data.indexOf(stext);
        let s2 = s1 + stext.length;
        let len = this.data.length;
        let newtext = this.data.substring(0, s1);
        let suffix = this.data.substring(s2, len);
        newtext += tag + suffix;
        this.data = newtext;
        this.showLink = false;
    }

}
