import { fromEvent, interval, Observable } from "rxjs";


// cold observable
const sequence2$ = interval(1000);
const sub2 = sequence2$.subscribe( v => {
    console.log(v)
})

setTimeout( () => {
    sub2.unsubscribe();
}, 3000)


// hot observable
const sequenceHot$ = fromEvent<MouseEvent>(document, 'click')
const subHot = sequenceHot$.subscribe( v => {
    console.log('Sub 1', v.clientX)
})

setTimeout( () => {
    sequenceHot$.subscribe( v => {
        console.log('Sub 2', v.clientX)
    })
}, 3000)