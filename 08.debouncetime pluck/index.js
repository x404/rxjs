"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const el = document.querySelector("input");
(0, rxjs_1.fromEvent)(el, "input").pipe((0, rxjs_1.debounceTime)(1000), (0, rxjs_1.pluck)("target", "value")).subscribe(v => {
    console.log(v);
});
//# sourceMappingURL=index.js.map