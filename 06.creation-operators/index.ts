import { defer, from, iif, of } from "rxjs";

// of
const sequence$ = of(1,2,3,4, 5);
sequence$.subscribe( value => {
    console.log(value)
});


// from
console.log('\n from')
const sequenceFrom$ = from( [1,2,3,4,5]);
sequenceFrom$.subscribe( value => {
    console.log(value)
});


// promise
const sequenceFetch$ = from(
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json())
)
sequenceFetch$.subscribe( value => {
    console.log(value)
});


// iif
const random = Math.round(Math.random() * 10);
const sequenceIif$ = iif( () => {
    return random > 5;
}, of( 'Value > 5'), of( 'Value < 5'));

sequenceIif$.subscribe( (v) => {
    console.log(v)
})


// fabric
const random2 = Math.round(Math.random() * 10);
const sequenceDefer$ = defer( () => {
    return random2 > 5
        ? random2 >= 8
            ? of('Value > 8')
            : of('Value > 5 < 8')
        : of('Value < 5')
});

sequenceDefer$.subscribe( (v) => {
    console.log(v)
})


//