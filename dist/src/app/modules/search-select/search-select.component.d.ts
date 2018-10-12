import { OnInit, EventEmitter } from '@angular/core';
export declare class SearchSelectComponent implements OnInit {
    placeHolder: any;
    dataList: any;
    selectedvalue: any;
    expc: any;
    disableFlag: boolean;
    expcChange: EventEmitter<any>;
    searchChanges: EventEmitter<any>;
    selectChanges: EventEmitter<any>;
    selectedEmitter: EventEmitter<any>;
    internalEmitter: EventEmitter<any>;
    filterText: any;
    value: string;
    name: string;
    searchText: string;
    optionSelected: string;
    showDrop: boolean;
    selectedId: number;
    dataListOriginal: any;
    constructor();
    ngOnInit(): void;
    toggleDropdwon(): void;
    outsideSelect(): void;
    ngOnChanges(changes: any): void;
    onSearch(event: any): void;
    valueSelected(i: any, id: any): void;
    searchChanged(): void;
}
