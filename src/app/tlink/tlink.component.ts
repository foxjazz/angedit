import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import {tlinkData} from "../tedit/Itlink";

@Component({
  selector: 'app-tlink',
  templateUrl: './tlink.component.html',
  styleUrls: ['./tlink.component.css']
})
export class TlinkComponent implements OnInit {
  displayText = new FormControl('');
  url = new FormControl('');
  private ldata: tlinkData;
  @Output() link = new EventEmitter<tlinkData>();
  constructor() { }

  ngOnInit(): void {
  }
  doReturn(){
    this.ldata = {displayText: this.displayText.value, Url: this.url.value};
    this.link.emit(this.ldata);
  }
}
