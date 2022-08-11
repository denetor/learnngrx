import {Injectable} from "@angular/core";
import {interval, Observable} from "rxjs";

@Injectable()
export class GeneratorService {

    linear(interval: number = 1000) {
        console.log('GeneratorService.linear()');

        const observable = new Observable(subscriber => {
            setInterval(() => {
                const n = Math.floor(Math.random()*100);
                subscriber.next(n);
            }, interval);
        });
        return observable;
    }
}
