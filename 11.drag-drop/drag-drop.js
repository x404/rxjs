"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drag = void 0;
const rxjs_1 = require("rxjs");
function drag(source1$, source2$, source3$) {
    return source1$
        .pipe((0, rxjs_1.concatMap)(startEvent => {
        return source2$
            .pipe((0, rxjs_1.map)(moveEvent => {
            moveEvent.preventDefault();
            return {
                left: moveEvent.clientX - startEvent.offsetX,
                top: moveEvent.clientY - startEvent.offsetY
            };
        }), (0, rxjs_1.takeUntil)(source3$));
    }));
}
exports.drag = drag;
//# sourceMappingURL=drag-drop.js.map