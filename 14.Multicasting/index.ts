import { ConnectableObservable, interval, multicast, Subject } from "rxjs";

const control = new Subject();

const sequence = interval(1000)
    .pipe(
        multicast(control)
    ) as ConnectableObservable<any>;

sequence.connect();
sequence.subscribe( v => console.log('Sub1= ', v))

setTimeout( () => {
    sequence.subscribe( v => console.log('Sub2= ', v))

}, 5000)