import { asap, async, combineLatest, from, map, of } from "rxjs";


// import { eventLoop } from "./eventloop";
// eventLoop();


const a$ = from([1,2], async );
const b$ = of(10);

const c$ = combineLatest([a$, b$])
    .pipe(
        map( ([a,b]) => a + b)
    )
    .subscribe( v => {
        console.log(v)
    })