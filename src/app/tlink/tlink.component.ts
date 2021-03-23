import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
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
  @Input() seltext: string;
  constructor() { }

  ngOnInit(): void {
    this.displayText.setValue(this.seltext);
    this.url.setValue('http://abc.com');
  }
  doReturn(){
    this.ldata = {displayText: this.displayText.value, Url: this.url.value};
    this.link.emit(this.ldata);
  }
}
