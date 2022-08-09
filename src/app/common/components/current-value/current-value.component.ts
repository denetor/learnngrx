import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'ndr-current-value',
    templateUrl: './current-value.component.html'
})
export class CurrentValueComponent implements OnInit {
    @Input()
    value: number | undefined = undefined;


    ngOnInit() {
        this.value = undefined;
    }
}

