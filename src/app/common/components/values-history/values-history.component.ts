import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'ndr-values-history',
    templateUrl: './values-history.component.html'
})
export class ValuesHistoryComponent implements OnInit {
    @Input()
    values: number[] = [];


    ngOnInit() {
        this.values = [];
    }
}
