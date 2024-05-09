import { interval, Observable } from "rxjs";

const sequence2$ = interval(1000);
const sub2 = sequence2$.subscribe( v => {
    console.log(v)
})

setTimeout( () => {
    sub2.unsubscribe();
}, 3000)