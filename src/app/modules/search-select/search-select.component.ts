import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.css']
})
export class SearchSelectComponent implements OnInit {

  @Input() placeHolder: any = '';
  @Input() dataList: any = [];
  @Input() selectedvalue: any = '';
  @Input() expc: any;
  @Input() disableFlag: boolean;
  @Output() expcChange: EventEmitter<any> = new EventEmitter();
  @Output() searchChanges: EventEmitter<any> = new EventEmitter();
  @Output() selectChanges: EventEmitter<any> = new EventEmitter();
  @Output() selectedEmitter: EventEmitter<any> = new EventEmitter();
  @Output() internalEmitter: EventEmitter<any> = new EventEmitter();



  public filterText;
  public value = '';
  public name = '';
  public searchText = '';
  public optionSelected = '';
  public showDrop = true;
  public selectedId = 0;
  public dataListOriginal;

  constructor() {
  }

  ngOnInit() {
    this.searchText = '';
  }

  toggleDropdwon() {

  }

  outsideSelect() {

  }

  ngOnChanges(changes: any) {

    if (changes.hasOwnProperty('dataList')) {
      this.selectedId = 0;
      this.dataListOriginal = this.dataList;
    }
    if (changes.hasOwnProperty('expc')) {
      if(!this.expc){
        this.searchText ='';
      }
    }

    if (changes.hasOwnProperty('selectedvalue')) {
      let tmp = this.dataList.filter((data) => {
        if (data.id == this.selectedvalue.id) {
          return true;
        }
      })[0];
      this.value = tmp !== undefined ? tmp.name : '';
      if (!tmp) {
        this.value = this.selectedvalue.name;
      }
      this.name = this.selectedvalue.name;
    }

    if (changes.hasOwnProperty('placeHolder')) {
      this.internalEmitter.emit(this.placeHolder);
      this.selectedEmitter.emit(this.selectedvalue);
    }
  }


  onSearch(event: any) {
    if (this.searchText == '') {
      this.dataList = this.dataListOriginal;
    } else {
      let data = [];
      if (this.searchText.length > 0) {
        let filterSet = this.dataList.filter((item) => {
          return item.name.toLowerCase()
            .indexOf(this.searchText.toLowerCase()) > -1
        });
        this.dataList = filterSet;
      } else {
        this.dataList = [];
      }
    }
  }


  valueSelected(i, id) {
    this.selectedId = i;
    this.expcChange.emit(this.expc);
    this.selectedvalue = id;
    this.value = this.dataList[i].name;
    this.selectChanges.emit(id);
  }

  searchChanged() {
    let str = '';
    let fFlag = false;
    for(let letter of this.searchText){
      if(letter == ' ' && !fFlag){

      } else {
        str = str + letter;
        fFlag = true;
      }
    }

    this.searchText = str;
    if (this.searchText == '' || ((this.searchText != '') && (this.searchText.length > 1))) {
      this.selectedId = 0;
      this.searchChanges.emit(this.searchText);
    }
  }



}

