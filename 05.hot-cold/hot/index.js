"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// lazy push collection
// const sequence$ = new Observable( (subscriber) => {
//     let count = 1;
//     const intervalId = setInterval( () => {
//         // if (count % 5 === 0){
//         //     clearInterval(intervalId);
//         //     subscriber.complete();
//         //     return;
//         // }
//         subscriber.next(count++);
//     }, 1000);
//
//     return () => {
//         console.log('unsubscribe');
//         clearInterval(intervalId)
//     }
// });
// const subscription = sequence$.subscribe( v => {
//     console.log(v)
// }, 
//     () => {},
//     () => {
//         console.log('completed')
// });
//
// // setInterval( () => {
// //     subscription.unsubscribe();
// // }, 3000)
//
// // const sequence2$ = interval(1000);
// const sub2 = sequence$.subscribe( v => {
//     console.log(v);
// })
//
// setTimeout( () => {
//     sequence$.subscribe( v => {
//         console.log('timeout', v);
//     })
// }, 5000)
const socket = new WebSocket('wss://echo.websocket.org/');
const sequence$ = new rxjs_1.Observable((subscriber) => {
    socket.addEventListener('message', (e) => {
        subscriber.next(e);
    });
});
socket.addEventListener("open", (event) => {
    let count = 1;
    const intervalId = setInterval(() => {
        socket.send((count++).toString());
    }, 1000);
});
//# sourceMappingURL=index.js.map