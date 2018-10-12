/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SearchSelectComponent {
    constructor() {
        this.placeHolder = '';
        this.dataList = [];
        this.selectedvalue = '';
        this.expcChange = new EventEmitter();
        this.searchChanges = new EventEmitter();
        this.selectChanges = new EventEmitter();
        this.selectedEmitter = new EventEmitter();
        this.internalEmitter = new EventEmitter();
        this.value = '';
        this.name = '';
        this.searchText = '';
        this.optionSelected = '';
        this.showDrop = true;
        this.selectedId = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.searchText = '';
    }
    /**
     * @return {?}
     */
    toggleDropdwon() {
    }
    /**
     * @return {?}
     */
    outsideSelect() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('dataList')) {
            this.selectedId = 0;
            this.dataListOriginal = this.dataList;
        }
        if (changes.hasOwnProperty('expc')) {
            if (!this.expc) {
                this.searchText = '';
            }
        }
        if (changes.hasOwnProperty('selectedvalue')) {
            /** @type {?} */
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
    /**
     * @param {?} event
     * @return {?}
     */
    onSearch(event) {
        if (this.searchText == '') {
            this.dataList = this.dataListOriginal;
        }
        else {
            /** @type {?} */
            let data = [];
            if (this.searchText.length > 0) {
                /** @type {?} */
                let filterSet = this.dataList.filter((item) => {
                    return item.name.toLowerCase()
                        .indexOf(this.searchText.toLowerCase()) > -1;
                });
                this.dataList = filterSet;
            }
            else {
                this.dataList = [];
            }
        }
    }
    /**
     * @param {?} i
     * @param {?} id
     * @return {?}
     */
    valueSelected(i, id) {
        this.selectedId = i;
        this.expcChange.emit(this.expc);
        this.selectedvalue = id;
        this.value = this.dataList[i].name;
        this.selectChanges.emit(id);
    }
    /**
     * @return {?}
     */
    searchChanged() {
        /** @type {?} */
        let str = '';
        /** @type {?} */
        let fFlag = false;
        for (let letter of this.searchText) {
            if (letter == ' ' && !fFlag) {
            }
            else {
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
SearchSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-search-select',
                template: "<div class=\"col\">\n  <div class=\"row\">\n    <div class=\"form-control\" style=\"border:none; padding:0;\">\n      <button type=\"button\" [disabled]=\"disableFlag\" type=\"button\" (click)=\"toggleDropdwon()\" class=\" btn mb-0 dropdown-toggle btn-default buttonClass font-small-3\"\n        data-toggle=\"dropdown\" data-id=\"select-country\" title=\"{{value}}\" aria-expanded=\"false\" style=\"font-weight:500; text-align:left;   height: inherit;\">\n        <span class=\" filter-option pull-left buttonSpan\" style=\"text-overflow: ellipsis;width: 130px;font-weight:600; white-space: nowrap;overflow: hidden;    text-align: left;\">\n          {{ value !== '' && value !== undefined ? value: placeHolder}}</span>&nbsp;\n        <span class=\"bs-caret\">\n          <span class=\"caret\"></span>\n        </span>\n      </button>\n\n      <div class=\"dropdown-menu open divUl\" x-placement=\"bottom-start\">\n        <div class=\"bs-searchbox divUl1\">\n          <input type=\"text\" (keyup)=\"searchChanged()\" [(ngModel)]=\"searchText\" class=\"form-control searchInput\" autocomplete=\"off\">\n\n          <ul class=\"dropdown-menu ulClass\" role=\"menu\">\n            <li *ngFor=\"let d of dataList  ;let i = index\" (click)=\"valueSelected(i, d.id)\" data-original-index=\"i\" [ngClass]=\"  {'active':selectedId == i }\"\n              class=\"selected activeClass liClass\">\n              <a tabindex=\"0\" data-tokens=\"null\">\n                <span class=\"text ellipsis \" title=\"{{d.name}}\" style=\"color:#000 \">{{d.name}}</span>\n                <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n              </a>\n            </li>\n\n          </ul>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n",
                styles: ["select.bs-select-hidden,select.selectpicker{display:none!important}.bootstrap-select>.dropdown-toggle{width:16%;padding-right:25px;z-index:1}.bootstrap-select>.dropdown-toggle.bs-placeholder,.bootstrap-select>.dropdown-toggle.bs-placeholder:active,.bootstrap-select>.dropdown-toggle.bs-placeholder:focus,.bootstrap-select>.dropdown-toggle.bs-placeholder:hover{color:#999}.bootstrap-select>select{position:absolute!important;bottom:0;left:50%;display:block!important;width:.5px!important;height:100%!important;padding:0!important;opacity:0!important;border:none}.bootstrap-select>select.mobile-device{top:0;left:0;display:block!important;width:100%!important;z-index:2}.error .bootstrap-select .dropdown-toggle,.has-error .bootstrap-select .dropdown-toggle{border-color:#b94a48}.bootstrap-select.fit-width{width:auto!important}.bootstrap-select:not([class*=col-]):not([class*=form-control]):not(.input-group-btn){width:220px}.bootstrap-select .dropdown-toggle:focus{outline:#333 dotted thin!important;outline:-webkit-focus-ring-color auto 5px!important;outline-offset:-2px}.bootstrap-select.form-control{margin-bottom:0;padding:0;border:none}.bootstrap-select.form-control:not([class*=col-]){width:100%}.bootstrap-select.form-control.input-group-btn{z-index:auto}.bootstrap-select.form-control.input-group-btn:not(:first-child):not(:last-child)>.btn{border-radius:0}.bootstrap-select.btn-group:not(.input-group-btn),.bootstrap-select.btn-group[class*=col-]{float:none;display:inline-block;margin-left:0}.bootstrap-select.btn-group.dropdown-menu-right,.bootstrap-select.btn-group[class*=col-].dropdown-menu-right,.row .bootstrap-select.btn-group[class*=col-].dropdown-menu-right{float:right}.form-group .bootstrap-select.btn-group,.form-horizontal .bootstrap-select.btn-group,.form-inline .bootstrap-select.btn-group{margin-bottom:0}.form-group-lg .bootstrap-select.btn-group.form-control,.form-group-sm .bootstrap-select.btn-group.form-control{padding:0}.form-group-lg .bootstrap-select.btn-group.form-control .dropdown-toggle,.form-group-sm .bootstrap-select.btn-group.form-control .dropdown-toggle{height:100%;font-size:inherit;line-height:inherit;border-radius:inherit}.form-inline .bootstrap-select.btn-group .form-control{width:100%}.bootstrap-select.btn-group.disabled,.bootstrap-select.btn-group>.disabled{cursor:not-allowed}.bootstrap-select.btn-group.disabled:focus,.bootstrap-select.btn-group>.disabled:focus{outline:0!important}.bootstrap-select.btn-group.bs-container{position:absolute;height:0!important;padding:0!important}.bootstrap-select.btn-group.bs-container .dropdown-menu{z-index:1060}.bootstrap-select.btn-group .dropdown-toggle .filter-option{display:inline-block;overflow:hidden;width:100%;text-align:left}.bootstrap-select.btn-group .dropdown-toggle .caret{position:absolute;top:50%;right:12px;margin-top:-2px;vertical-align:middle}.bootstrap-select.btn-group[class*=col-] .dropdown-toggle{width:100%}.bootstrap-select.btn-group .dropdown-menu{min-width:100%;box-sizing:border-box}.bootstrap-select.btn-group .dropdown-menu.inner{position:static;float:none;border:0;padding:0;margin:0;border-radius:0;box-shadow:none}.bootstrap-select.btn-group .dropdown-menu li{position:relative;text-align:center}.bootstrap-select.btn-group .dropdown-menu li.active small{color:#fff}.bootstrap-select.btn-group .dropdown-menu li.disabled a{cursor:not-allowed}.bootstrap-select.btn-group .dropdown-menu li a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bootstrap-select.btn-group .dropdown-menu li a.opt{position:relative;padding-left:2.25em}.bootstrap-select.btn-group .dropdown-menu li a span.check-mark{display:none}.bootstrap-select.btn-group .dropdown-menu li a span.text{display:inline-block}.bootstrap-select.btn-group .dropdown-menu li small{padding-left:.5em}.bootstrap-select.btn-group .dropdown-menu .notify{position:absolute;bottom:5px;width:96%;margin:0 2%;min-height:26px;padding:3px 5px;background:#f5f5f5;border:1px solid #e3e3e3;box-shadow:inset 0 1px 1px rgba(0,0,0,.05);pointer-events:none;opacity:.9;box-sizing:border-box}.bootstrap-select.btn-group .no-results{padding:3px;background:#f5f5f5;margin:0 5px;white-space:nowrap}.bootstrap-select.btn-group.fit-width .dropdown-toggle .filter-option{position:static}.bootstrap-select.btn-group.fit-width .dropdown-toggle .caret{position:static;top:auto;margin-top:-1px}.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark{position:absolute;display:inline-block;right:15px;margin-top:5px}.bootstrap-select.btn-group.show-tick .dropdown-menu li a span.text{margin-right:34px}.bootstrap-select.show-menu-arrow.open>.dropdown-toggle{z-index:1061}.bootstrap-select.show-menu-arrow .dropdown-toggle:before{content:'';border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid rgba(204,204,204,.2);position:absolute;bottom:-4px;left:9px;display:none}.bootstrap-select.show-menu-arrow .dropdown-toggle:after{content:'';border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;position:absolute;bottom:-4px;left:10px;display:none}.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:before{bottom:auto;top:-3px;border-top:7px solid rgba(204,204,204,.2);border-bottom:0}.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:after{bottom:auto;top:-3px;border-top:6px solid #fff;border-bottom:0}.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:before{right:12px;left:auto}.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:after{right:13px;left:auto}.bootstrap-select.show-menu-arrow.open>.dropdown-toggle:after,.bootstrap-select.show-menu-arrow.open>.dropdown-toggle:before{display:block}.bs-actionsbox,.bs-donebutton,.bs-searchbox{padding:4px 8px}.bs-actionsbox{width:100%;box-sizing:border-box}.bs-actionsbox .btn-group button{width:50%}.bs-donebutton{float:left;width:100%;box-sizing:border-box}.bs-donebutton .btn-group button{width:100%}.bs-searchbox+.bs-actionsbox{padding:0 8px 4px}.bs-searchbox .form-control{margin-bottom:0;width:100%;float:none;height:35px;border:none}.text-class{text-align:left;padding-left:5px}.active,.dropdown-menu .active a{background-color:#d3d3d3}.buttonClass{background-color:#fff;width:100%;border:1px solid #d3d3d3}.buttonSpan{position:relative;text-align:center;color:#000}.divUl{overflow:hidden;min-height:18px;position:absolute;-webkit-transform:translate3d(0,37px,0);transform:translate3d(0,37px,0);top:5px;left:8px;will-change:transform}.divUl1{width:100%;height:auto;border-radius:0}.searchInput{border:1px solid #bbacac!important}.ulClass{position:relative;display:block;overflow-y:auto;max-height:200px;top:0;width:100%;border:0}.liClass{text-align:left;padding:5px;font-weight:300}.dropdown-toggle::after{position:absolute;top:17px;right:10px;margin-left:0!important}.dropdown{display:inline-block!important}.btn:not(:disabled):not(.disabled){width:100%;background-color:#fff}.ellipsis{color:#000;width:100%;overflow:hidden;display:block;white-space:nowrap;text-overflow:ellipsis}.text:hover{background-color:gray}.dropdown-menu{width:100%!important}"]
            }] }
];
/** @nocollapse */
SearchSelectComponent.ctorParameters = () => [];
SearchSelectComponent.propDecorators = {
    placeHolder: [{ type: Input }],
    dataList: [{ type: Input }],
    selectedvalue: [{ type: Input }],
    expc: [{ type: Input }],
    disableFlag: [{ type: Input }],
    expcChange: [{ type: Output }],
    searchChanges: [{ type: Output }],
    selectChanges: [{ type: Output }],
    selectedEmitter: [{ type: Output }],
    internalEmitter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SearchSelectComponent.prototype.placeHolder;
    /** @type {?} */
    SearchSelectComponent.prototype.dataList;
    /** @type {?} */
    SearchSelectComponent.prototype.selectedvalue;
    /** @type {?} */
    SearchSelectComponent.prototype.expc;
    /** @type {?} */
    SearchSelectComponent.prototype.disableFlag;
    /** @type {?} */
    SearchSelectComponent.prototype.expcChange;
    /** @type {?} */
    SearchSelectComponent.prototype.searchChanges;
    /** @type {?} */
    SearchSelectComponent.prototype.selectChanges;
    /** @type {?} */
    SearchSelectComponent.prototype.selectedEmitter;
    /** @type {?} */
    SearchSelectComponent.prototype.internalEmitter;
    /** @type {?} */
    SearchSelectComponent.prototype.filterText;
    /** @type {?} */
    SearchSelectComponent.prototype.value;
    /** @type {?} */
    SearchSelectComponent.prototype.name;
    /** @type {?} */
    SearchSelectComponent.prototype.searchText;
    /** @type {?} */
    SearchSelectComponent.prototype.optionSelected;
    /** @type {?} */
    SearchSelectComponent.prototype.showDrop;
    /** @type {?} */
    SearchSelectComponent.prototype.selectedId;
    /** @type {?} */
    SearchSelectComponent.prototype.dataListOriginal;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY3VzdG9tLWRyb3Bkb3duLXNlbGVjdC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gtc2VsZWN0L3NlYXJjaC1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUS9FLE1BQU07SUF3Qko7MkJBdEI0QixFQUFFO3dCQUNMLEVBQUU7NkJBQ0csRUFBRTswQkFHVSxJQUFJLFlBQVksRUFBRTs2QkFDZixJQUFJLFlBQVksRUFBRTs2QkFDbEIsSUFBSSxZQUFZLEVBQUU7K0JBQ2hCLElBQUksWUFBWSxFQUFFOytCQUNsQixJQUFJLFlBQVksRUFBRTtxQkFLbEQsRUFBRTtvQkFDSCxFQUFFOzBCQUNJLEVBQUU7OEJBQ0UsRUFBRTt3QkFDUixJQUFJOzBCQUNGLENBQUM7S0FJcEI7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxjQUFjO0tBRWI7Ozs7SUFFRCxhQUFhO0tBRVo7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQVk7UUFFdEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdkM7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNiLElBQUks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WUFDakMsRUFBRSxDQUFBLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7YUFFM0I7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDbkIsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNkO1NBQ0Y7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQztLQUNGOzs7WUF2SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHF1REFBNkM7O2FBRTlDOzs7OzswQkFHRSxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsTUFBTTs0QkFDTixNQUFNOzRCQUNOLE1BQU07OEJBQ04sTUFBTTs4QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zZWFyY2gtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtc2VsZWN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBhbnkgPSAnJztcbiAgQElucHV0KCkgZGF0YUxpc3Q6IGFueSA9IFtdO1xuICBASW5wdXQoKSBzZWxlY3RlZHZhbHVlOiBhbnkgPSAnJztcbiAgQElucHV0KCkgZXhwYzogYW55O1xuICBASW5wdXQoKSBkaXNhYmxlRmxhZzogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGV4cGNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VhcmNoQ2hhbmdlczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBpbnRlcm5hbEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cblxuICBwdWJsaWMgZmlsdGVyVGV4dDtcbiAgcHVibGljIHZhbHVlID0gJyc7XG4gIHB1YmxpYyBuYW1lID0gJyc7XG4gIHB1YmxpYyBzZWFyY2hUZXh0ID0gJyc7XG4gIHB1YmxpYyBvcHRpb25TZWxlY3RlZCA9ICcnO1xuICBwdWJsaWMgc2hvd0Ryb3AgPSB0cnVlO1xuICBwdWJsaWMgc2VsZWN0ZWRJZCA9IDA7XG4gIHB1YmxpYyBkYXRhTGlzdE9yaWdpbmFsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gJyc7XG4gIH1cblxuICB0b2dnbGVEcm9wZHdvbigpIHtcblxuICB9XG5cbiAgb3V0c2lkZVNlbGVjdCgpIHtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XG5cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGF0YUxpc3QnKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZElkID0gMDtcbiAgICAgIHRoaXMuZGF0YUxpc3RPcmlnaW5hbCA9IHRoaXMuZGF0YUxpc3Q7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdleHBjJykpIHtcbiAgICAgIGlmKCF0aGlzLmV4cGMpe1xuICAgICAgICB0aGlzLnNlYXJjaFRleHQgPScnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdzZWxlY3RlZHZhbHVlJykpIHtcbiAgICAgIGxldCB0bXAgPSB0aGlzLmRhdGFMaXN0LmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5pZCA9PSB0aGlzLnNlbGVjdGVkdmFsdWUuaWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlbMF07XG4gICAgICB0aGlzLnZhbHVlID0gdG1wICE9PSB1bmRlZmluZWQgPyB0bXAubmFtZSA6ICcnO1xuICAgICAgaWYgKCF0bXApIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc2VsZWN0ZWR2YWx1ZS5uYW1lO1xuICAgICAgfVxuICAgICAgdGhpcy5uYW1lID0gdGhpcy5zZWxlY3RlZHZhbHVlLm5hbWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BsYWNlSG9sZGVyJykpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxFbWl0dGVyLmVtaXQodGhpcy5wbGFjZUhvbGRlcik7XG4gICAgICB0aGlzLnNlbGVjdGVkRW1pdHRlci5lbWl0KHRoaXMuc2VsZWN0ZWR2YWx1ZSk7XG4gICAgfVxuICB9XG5cblxuICBvblNlYXJjaChldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoVGV4dCA9PSAnJykge1xuICAgICAgdGhpcy5kYXRhTGlzdCA9IHRoaXMuZGF0YUxpc3RPcmlnaW5hbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGRhdGEgPSBbXTtcbiAgICAgIGlmICh0aGlzLnNlYXJjaFRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZmlsdGVyU2V0ID0gdGhpcy5kYXRhTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSA+IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZmlsdGVyU2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgdmFsdWVTZWxlY3RlZChpLCBpZCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJZCA9IGk7XG4gICAgdGhpcy5leHBjQ2hhbmdlLmVtaXQodGhpcy5leHBjKTtcbiAgICB0aGlzLnNlbGVjdGVkdmFsdWUgPSBpZDtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5kYXRhTGlzdFtpXS5uYW1lO1xuICAgIHRoaXMuc2VsZWN0Q2hhbmdlcy5lbWl0KGlkKTtcbiAgfVxuXG4gIHNlYXJjaENoYW5nZWQoKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGxldCBmRmxhZyA9IGZhbHNlO1xuICAgIGZvcihsZXQgbGV0dGVyIG9mIHRoaXMuc2VhcmNoVGV4dCl7XG4gICAgICBpZihsZXR0ZXIgPT0gJyAnICYmICFmRmxhZyl7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxldHRlcjtcbiAgICAgICAgZkZsYWcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoVGV4dCA9IHN0cjtcbiAgICBpZiAodGhpcy5zZWFyY2hUZXh0ID09ICcnIHx8ICgodGhpcy5zZWFyY2hUZXh0ICE9ICcnKSAmJiAodGhpcy5zZWFyY2hUZXh0Lmxlbmd0aCA+IDEpKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZElkID0gMDtcbiAgICAgIHRoaXMuc2VhcmNoQ2hhbmdlcy5lbWl0KHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgfVxuICB9XG5cblxuXG59XG5cbiJdfQ==