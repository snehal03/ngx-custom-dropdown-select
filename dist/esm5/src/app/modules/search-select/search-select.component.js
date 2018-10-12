/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SearchSelectComponent = /** @class */ (function () {
    function SearchSelectComponent() {
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
    SearchSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.searchText = '';
    };
    /**
     * @return {?}
     */
    SearchSelectComponent.prototype.toggleDropdwon = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SearchSelectComponent.prototype.outsideSelect = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SearchSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
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
            var tmp = this.dataList.filter(function (data) {
                if (data.id == _this.selectedvalue.id) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SearchSelectComponent.prototype.onSearch = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.searchText == '') {
            this.dataList = this.dataListOriginal;
        }
        else {
            /** @type {?} */
            var data = [];
            if (this.searchText.length > 0) {
                /** @type {?} */
                var filterSet = this.dataList.filter(function (item) {
                    return item.name.toLowerCase()
                        .indexOf(_this.searchText.toLowerCase()) > -1;
                });
                this.dataList = filterSet;
            }
            else {
                this.dataList = [];
            }
        }
    };
    /**
     * @param {?} i
     * @param {?} id
     * @return {?}
     */
    SearchSelectComponent.prototype.valueSelected = /**
     * @param {?} i
     * @param {?} id
     * @return {?}
     */
    function (i, id) {
        this.selectedId = i;
        this.expcChange.emit(this.expc);
        this.selectedvalue = id;
        this.value = this.dataList[i].name;
        this.selectChanges.emit(id);
    };
    /**
     * @return {?}
     */
    SearchSelectComponent.prototype.searchChanged = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var str = '';
        /** @type {?} */
        var fFlag = false;
        try {
            for (var _a = tslib_1.__values(this.searchText), _b = _a.next(); !_b.done; _b = _a.next()) {
                var letter = _b.value;
                if (letter == ' ' && !fFlag) {
                }
                else {
                    str = str + letter;
                    fFlag = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.searchText = str;
        if (this.searchText == '' || ((this.searchText != '') && (this.searchText.length > 1))) {
            this.selectedId = 0;
            this.searchChanges.emit(this.searchText);
        }
        var e_1, _c;
    };
    SearchSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-search-select',
                    template: "<div class=\"col\">\n  <div class=\"row\">\n    <div class=\"form-control\" style=\"border:none; padding:0;\">\n      <button type=\"button\" [disabled]=\"disableFlag\" type=\"button\" (click)=\"toggleDropdwon()\" class=\" btn mb-0 dropdown-toggle btn-default buttonClass font-small-3\"\n        data-toggle=\"dropdown\" data-id=\"select-country\" title=\"{{value}}\" aria-expanded=\"false\" style=\"font-weight:500; text-align:left;   height: inherit;\">\n        <span class=\" filter-option pull-left buttonSpan\" style=\"text-overflow: ellipsis;width: 130px;font-weight:600; white-space: nowrap;overflow: hidden;    text-align: left;\">\n          {{ value !== '' && value !== undefined ? value: placeHolder}}</span>&nbsp;\n        <span class=\"bs-caret\">\n          <span class=\"caret\"></span>\n        </span>\n      </button>\n\n      <div class=\"dropdown-menu open divUl\" x-placement=\"bottom-start\">\n        <div class=\"bs-searchbox divUl1\">\n          <input type=\"text\" (keyup)=\"searchChanged()\" [(ngModel)]=\"searchText\" class=\"form-control searchInput\" autocomplete=\"off\">\n\n          <ul class=\"dropdown-menu ulClass\" role=\"menu\">\n            <li *ngFor=\"let d of dataList  ;let i = index\" (click)=\"valueSelected(i, d.id)\" data-original-index=\"i\" [ngClass]=\"  {'active':selectedId == i }\"\n              class=\"selected activeClass liClass\">\n              <a tabindex=\"0\" data-tokens=\"null\">\n                <span class=\"text ellipsis \" title=\"{{d.name}}\" style=\"color:#000 \">{{d.name}}</span>\n                <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n              </a>\n            </li>\n\n          </ul>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n",
                    styles: ["select.bs-select-hidden,select.selectpicker{display:none!important}.bootstrap-select>.dropdown-toggle{width:16%;padding-right:25px;z-index:1}.bootstrap-select>.dropdown-toggle.bs-placeholder,.bootstrap-select>.dropdown-toggle.bs-placeholder:active,.bootstrap-select>.dropdown-toggle.bs-placeholder:focus,.bootstrap-select>.dropdown-toggle.bs-placeholder:hover{color:#999}.bootstrap-select>select{position:absolute!important;bottom:0;left:50%;display:block!important;width:.5px!important;height:100%!important;padding:0!important;opacity:0!important;border:none}.bootstrap-select>select.mobile-device{top:0;left:0;display:block!important;width:100%!important;z-index:2}.error .bootstrap-select .dropdown-toggle,.has-error .bootstrap-select .dropdown-toggle{border-color:#b94a48}.bootstrap-select.fit-width{width:auto!important}.bootstrap-select:not([class*=col-]):not([class*=form-control]):not(.input-group-btn){width:220px}.bootstrap-select .dropdown-toggle:focus{outline:#333 dotted thin!important;outline:-webkit-focus-ring-color auto 5px!important;outline-offset:-2px}.bootstrap-select.form-control{margin-bottom:0;padding:0;border:none}.bootstrap-select.form-control:not([class*=col-]){width:100%}.bootstrap-select.form-control.input-group-btn{z-index:auto}.bootstrap-select.form-control.input-group-btn:not(:first-child):not(:last-child)>.btn{border-radius:0}.bootstrap-select.btn-group:not(.input-group-btn),.bootstrap-select.btn-group[class*=col-]{float:none;display:inline-block;margin-left:0}.bootstrap-select.btn-group.dropdown-menu-right,.bootstrap-select.btn-group[class*=col-].dropdown-menu-right,.row .bootstrap-select.btn-group[class*=col-].dropdown-menu-right{float:right}.form-group .bootstrap-select.btn-group,.form-horizontal .bootstrap-select.btn-group,.form-inline .bootstrap-select.btn-group{margin-bottom:0}.form-group-lg .bootstrap-select.btn-group.form-control,.form-group-sm .bootstrap-select.btn-group.form-control{padding:0}.form-group-lg .bootstrap-select.btn-group.form-control .dropdown-toggle,.form-group-sm .bootstrap-select.btn-group.form-control .dropdown-toggle{height:100%;font-size:inherit;line-height:inherit;border-radius:inherit}.form-inline .bootstrap-select.btn-group .form-control{width:100%}.bootstrap-select.btn-group.disabled,.bootstrap-select.btn-group>.disabled{cursor:not-allowed}.bootstrap-select.btn-group.disabled:focus,.bootstrap-select.btn-group>.disabled:focus{outline:0!important}.bootstrap-select.btn-group.bs-container{position:absolute;height:0!important;padding:0!important}.bootstrap-select.btn-group.bs-container .dropdown-menu{z-index:1060}.bootstrap-select.btn-group .dropdown-toggle .filter-option{display:inline-block;overflow:hidden;width:100%;text-align:left}.bootstrap-select.btn-group .dropdown-toggle .caret{position:absolute;top:50%;right:12px;margin-top:-2px;vertical-align:middle}.bootstrap-select.btn-group[class*=col-] .dropdown-toggle{width:100%}.bootstrap-select.btn-group .dropdown-menu{min-width:100%;box-sizing:border-box}.bootstrap-select.btn-group .dropdown-menu.inner{position:static;float:none;border:0;padding:0;margin:0;border-radius:0;box-shadow:none}.bootstrap-select.btn-group .dropdown-menu li{position:relative;text-align:center}.bootstrap-select.btn-group .dropdown-menu li.active small{color:#fff}.bootstrap-select.btn-group .dropdown-menu li.disabled a{cursor:not-allowed}.bootstrap-select.btn-group .dropdown-menu li a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bootstrap-select.btn-group .dropdown-menu li a.opt{position:relative;padding-left:2.25em}.bootstrap-select.btn-group .dropdown-menu li a span.check-mark{display:none}.bootstrap-select.btn-group .dropdown-menu li a span.text{display:inline-block}.bootstrap-select.btn-group .dropdown-menu li small{padding-left:.5em}.bootstrap-select.btn-group .dropdown-menu .notify{position:absolute;bottom:5px;width:96%;margin:0 2%;min-height:26px;padding:3px 5px;background:#f5f5f5;border:1px solid #e3e3e3;box-shadow:inset 0 1px 1px rgba(0,0,0,.05);pointer-events:none;opacity:.9;box-sizing:border-box}.bootstrap-select.btn-group .no-results{padding:3px;background:#f5f5f5;margin:0 5px;white-space:nowrap}.bootstrap-select.btn-group.fit-width .dropdown-toggle .filter-option{position:static}.bootstrap-select.btn-group.fit-width .dropdown-toggle .caret{position:static;top:auto;margin-top:-1px}.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark{position:absolute;display:inline-block;right:15px;margin-top:5px}.bootstrap-select.btn-group.show-tick .dropdown-menu li a span.text{margin-right:34px}.bootstrap-select.show-menu-arrow.open>.dropdown-toggle{z-index:1061}.bootstrap-select.show-menu-arrow .dropdown-toggle:before{content:'';border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid rgba(204,204,204,.2);position:absolute;bottom:-4px;left:9px;display:none}.bootstrap-select.show-menu-arrow .dropdown-toggle:after{content:'';border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;position:absolute;bottom:-4px;left:10px;display:none}.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:before{bottom:auto;top:-3px;border-top:7px solid rgba(204,204,204,.2);border-bottom:0}.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:after{bottom:auto;top:-3px;border-top:6px solid #fff;border-bottom:0}.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:before{right:12px;left:auto}.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:after{right:13px;left:auto}.bootstrap-select.show-menu-arrow.open>.dropdown-toggle:after,.bootstrap-select.show-menu-arrow.open>.dropdown-toggle:before{display:block}.bs-actionsbox,.bs-donebutton,.bs-searchbox{padding:4px 8px}.bs-actionsbox{width:100%;box-sizing:border-box}.bs-actionsbox .btn-group button{width:50%}.bs-donebutton{float:left;width:100%;box-sizing:border-box}.bs-donebutton .btn-group button{width:100%}.bs-searchbox+.bs-actionsbox{padding:0 8px 4px}.bs-searchbox .form-control{margin-bottom:0;width:100%;float:none;height:35px;border:none}.text-class{text-align:left;padding-left:5px}.active,.dropdown-menu .active a{background-color:#d3d3d3}.buttonClass{background-color:#fff;width:100%;border:1px solid #d3d3d3}.buttonSpan{position:relative;text-align:center;color:#000}.divUl{overflow:hidden;min-height:18px;position:absolute;-webkit-transform:translate3d(0,37px,0);transform:translate3d(0,37px,0);top:5px;left:8px;will-change:transform}.divUl1{width:100%;height:auto;border-radius:0}.searchInput{border:1px solid #bbacac!important}.ulClass{position:relative;display:block;overflow-y:auto;max-height:200px;top:0;width:100%;border:0}.liClass{text-align:left;padding:5px;font-weight:300}.dropdown-toggle::after{position:absolute;top:17px;right:10px;margin-left:0!important}.dropdown{display:inline-block!important}.btn:not(:disabled):not(.disabled){width:100%;background-color:#fff}.ellipsis{color:#000;width:100%;overflow:hidden;display:block;white-space:nowrap;text-overflow:ellipsis}.text:hover{background-color:gray}.dropdown-menu{width:100%!important}"]
                }] }
    ];
    /** @nocollapse */
    SearchSelectComponent.ctorParameters = function () { return []; };
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
    return SearchSelectComponent;
}());
export { SearchSelectComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY3VzdG9tLWRyb3Bkb3duLXNlbGVjdC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gtc2VsZWN0L3NlYXJjaC1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFnQzdFOzJCQXRCNEIsRUFBRTt3QkFDTCxFQUFFOzZCQUNHLEVBQUU7MEJBR1UsSUFBSSxZQUFZLEVBQUU7NkJBQ2YsSUFBSSxZQUFZLEVBQUU7NkJBQ2xCLElBQUksWUFBWSxFQUFFOytCQUNoQixJQUFJLFlBQVksRUFBRTsrQkFDbEIsSUFBSSxZQUFZLEVBQUU7cUJBS2xELEVBQUU7b0JBQ0gsRUFBRTswQkFDSSxFQUFFOzhCQUNFLEVBQUU7d0JBQ1IsSUFBSTswQkFDRixDQUFDO0tBSXBCOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7S0FFQzs7OztJQUVELDZDQUFhOzs7SUFBYjtLQUVDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFZO1FBQXhCLGlCQTZCQztRQTNCQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN2QztRQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFB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RyxDQUFBLENBQWUsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxVQUFVLENBQUEsZ0JBQUE7Z0JBQTdCLElBQUksTUFBTSxXQUFBO2dCQUNaLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2lCQUUzQjtnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztvQkFDbkIsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFDZDthQUNGOzs7Ozs7Ozs7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQzs7S0FDRjs7Z0JBdkhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixxdURBQTZDOztpQkFFOUM7Ozs7OzhCQUdFLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxNQUFNO2dDQUNOLE1BQU07Z0NBQ04sTUFBTTtrQ0FDTixNQUFNO2tDQUNOLE1BQU07O2dDQW5CVDs7U0FRYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNlYXJjaC1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1zZWxlY3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IGFueSA9ICcnO1xuICBASW5wdXQoKSBkYXRhTGlzdDogYW55ID0gW107XG4gIEBJbnB1dCgpIHNlbGVjdGVkdmFsdWU6IGFueSA9ICcnO1xuICBASW5wdXQoKSBleHBjOiBhbnk7XG4gIEBJbnB1dCgpIGRpc2FibGVGbGFnOiBib29sZWFuO1xuICBAT3V0cHV0KCkgZXhwY0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWFyY2hDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdENoYW5nZXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGludGVybmFsRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXG4gIHB1YmxpYyBmaWx0ZXJUZXh0O1xuICBwdWJsaWMgdmFsdWUgPSAnJztcbiAgcHVibGljIG5hbWUgPSAnJztcbiAgcHVibGljIHNlYXJjaFRleHQgPSAnJztcbiAgcHVibGljIG9wdGlvblNlbGVjdGVkID0gJyc7XG4gIHB1YmxpYyBzaG93RHJvcCA9IHRydWU7XG4gIHB1YmxpYyBzZWxlY3RlZElkID0gMDtcbiAgcHVibGljIGRhdGFMaXN0T3JpZ2luYWw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlYXJjaFRleHQgPSAnJztcbiAgfVxuXG4gIHRvZ2dsZURyb3Bkd29uKCkge1xuXG4gIH1cblxuICBvdXRzaWRlU2VsZWN0KCkge1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcblxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkYXRhTGlzdCcpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSWQgPSAwO1xuICAgICAgdGhpcy5kYXRhTGlzdE9yaWdpbmFsID0gdGhpcy5kYXRhTGlzdDtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2V4cGMnKSkge1xuICAgICAgaWYoIXRoaXMuZXhwYyl7XG4gICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9Jyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3NlbGVjdGVkdmFsdWUnKSkge1xuICAgICAgbGV0IHRtcCA9IHRoaXMuZGF0YUxpc3QuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmlkID09IHRoaXMuc2VsZWN0ZWR2YWx1ZS5pZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVswXTtcbiAgICAgIHRoaXMudmFsdWUgPSB0bXAgIT09IHVuZGVmaW5lZCA/IHRtcC5uYW1lIDogJyc7XG4gICAgICBpZiAoIXRtcCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5zZWxlY3RlZHZhbHVlLm5hbWU7XG4gICAgICB9XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnNlbGVjdGVkdmFsdWUubmFtZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGxhY2VIb2xkZXInKSkge1xuICAgICAgdGhpcy5pbnRlcm5hbEVtaXR0ZXIuZW1pdCh0aGlzLnBsYWNlSG9sZGVyKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbWl0dGVyLmVtaXQodGhpcy5zZWxlY3RlZHZhbHVlKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uU2VhcmNoKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hUZXh0ID09ICcnKSB7XG4gICAgICB0aGlzLmRhdGFMaXN0ID0gdGhpcy5kYXRhTGlzdE9yaWdpbmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgaWYgKHRoaXMuc2VhcmNoVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBmaWx0ZXJTZXQgPSB0aGlzLmRhdGFMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkpID4gLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBmaWx0ZXJTZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gW107XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICB2YWx1ZVNlbGVjdGVkKGksIGlkKSB7XG4gICAgdGhpcy5zZWxlY3RlZElkID0gaTtcbiAgICB0aGlzLmV4cGNDaGFuZ2UuZW1pdCh0aGlzLmV4cGMpO1xuICAgIHRoaXMuc2VsZWN0ZWR2YWx1ZSA9IGlkO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmRhdGFMaXN0W2ldLm5hbWU7XG4gICAgdGhpcy5zZWxlY3RDaGFuZ2VzLmVtaXQoaWQpO1xuICB9XG5cbiAgc2VhcmNoQ2hhbmdlZCgpIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgbGV0IGZGbGFnID0gZmFsc2U7XG4gICAgZm9yKGxldCBsZXR0ZXIgb2YgdGhpcy5zZWFyY2hUZXh0KXtcbiAgICAgIGlmKGxldHRlciA9PSAnICcgJiYgIWZGbGFnKXtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gc3RyICsgbGV0dGVyO1xuICAgICAgICBmRmxhZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gc3RyO1xuICAgIGlmICh0aGlzLnNlYXJjaFRleHQgPT0gJycgfHwgKCh0aGlzLnNlYXJjaFRleHQgIT0gJycpICYmICh0aGlzLnNlYXJjaFRleHQubGVuZ3RoID4gMSkpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSWQgPSAwO1xuICAgICAgdGhpcy5zZWFyY2hDaGFuZ2VzLmVtaXQodGhpcy5zZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuXG5cbn1cblxuIl19