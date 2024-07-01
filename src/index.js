"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// cold observable
const sequence2$ = (0, rxjs_1.interval)(1000);
const sub2 = sequence2$.subscribe(v => {
    console.log(v);
});
setTimeout(() => {
    sub2.unsubscribe();
}, 3000);
// hot observable
const sequenceHot$ = (0, rxjs_1.fromEvent)(document, 'click');
const subHot = sequenceHot$.subscribe(v => {
    console.log('Sub 1', v.clientX);
});
setTimeout(() => {
    sequenceHot$.subscribe(v => {
        console.log('Sub 2', v.clientX);
    });
}, 3000);
//# sourceMappingURL=index.js.map