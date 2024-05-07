import { interval, Observable } from "rxjs";
//
// // lazy push collection
// const sequence$ = new Observable( (subscriber) => {
//     let count = 1;
//     const intervalId = setInterval( () => {
//         if (count % 5 === 0){
//             clearInterval(intervalId);
//             subscriber.complete();
//             return;
//         }
//         subscriber.next(count++);
//     }, 1000);
//    
//     return () => {
//         console.log('unsubscribe');
//         clearInterval(intervalId)
//     }
// });
//
// const subscription = sequence$.subscribe( v => {
//     console.log(v)
// }, 
//     () => {},
//     () => {
//         console.log('completed')
// });

// setInterval( () => {
//     subscription.unsubscribe();
// }, 3000)

const sequence2$ = interval(1000);
const sub2 = sequence2$.subscribe( v => {
    console.log(v)
})

setTimeout( () => {
    sub2.unsubscribe();
}, 7000)