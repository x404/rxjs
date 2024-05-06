"use strict";
// const sequence = new Promise (res => {
//     let count = 1;
//     setInterval(()=>{
//         res(count++)
//     })
// });
//
// sequence.then( v => console.log(v));
// sequence.then( v => console.log(v));
Object.defineProperty(exports, "__esModule", { value: true });
// GENERATORS
// const sequence = function* iteratorFn () {
//     let item = 1;
//     while (true){
//         yield item++;
//     }
// }();
//
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
const rxjs_1 = require("rxjs");
(0, rxjs_1.interval)(1000)
    .subscribe((v) => {
    console.log(v);
});
