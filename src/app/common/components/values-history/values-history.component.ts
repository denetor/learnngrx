import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'ndr-values-history',
    templateUrl: './values-history.component.html'
})
export class ValuesHistoryComponent implements OnInit {
    _values: number[] = [];

    @Input()
    set newValue(newValue: number | undefined) {
        if (newValue !== undefined) {
            this._values.push(newValue);
            if (this._values.length > 10) {
                this._values.shift();
            }
        }
    }

    ngOnInit() {
        this._values = [];
    }
}
