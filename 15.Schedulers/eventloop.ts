import { of } from "rxjs";

export function eventLoop() {
    console.log('start');
    of(1,2,3,4).subscribe( v => console.log(v));
    console.log('end');
}
