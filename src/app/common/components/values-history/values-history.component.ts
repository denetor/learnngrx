import {Component, Input, OnInit} from "@angular/core";
import {Observable, Subscription} from "rxjs";

@Component({
    selector: 'ndr-values-history',
    templateUrl: './values-history.component.html'
})
export class ValuesHistoryComponent implements OnInit {
    @Input()
    values: number[] = [];

    @Input()
    listObservable: Observable<any> | undefined = undefined;


    ngOnInit() {
        this.values = [];
        if (this.listObservable) {
            this.listObservable.subscribe(values => {
                this.values.push(values);
                if (this.values.length > 10) {
                    this.values.unshift();
                }
            });
        }
    }
}
