// TRANSFORM METHODS

import { flatMap, fromEvent, interval, map, mapTo, mergeMap, of, pluck, reduce, scan, switchMap } from "rxjs";


// 1. ====  pluck ==== 
// deprecated. use a 'map' operator
const obj$ = of({
    name: 'John',
    age: 27
}).pipe(
    // pluck('age'),
    map( v => v.age),
)
obj$.subscribe( v => console.log(v))


// 2. ====  reduce ==== 
const o2$ = of(1,2,3,4,5).pipe(
    reduce( (acc, val) => acc + val),
)
o2$.subscribe( v => console.log(v))
//15



// 3. ====  reduce ==== 
// похож на reduce, но на каждой итерации емитит значение
const o3$ = of(1,2,3,4,5).pipe(
    scan( (acc, val) => acc + val),
)
o3$.subscribe( v => console.log(v))
//15


// 4. mapTo
// используется для того, чтобы преобразовать каждое значение, испускаемое исходным наблюдаемым объектом, в одно и то же заданное значение. 
// Другими словами, он заменяет все значения в потоке на одно конкретное значение.
const o4$ = of(1,2,3,4,5).pipe(
    mapTo('hi')
)
o4$.subscribe( v => console.log(v))


// 5. mergeMap
const clicks$ = fromEvent(document, 'click').pipe(
    mergeMap( _ => interval(1000))
)

// clicks$.subscribe( v => console.log(v))



// 6. switchMap
// после клика предыдущая последовательность останавливается и мы переключаемся на новую последовательность
const clicks6$ = fromEvent(document, 'click').pipe(
    switchMap( _ => interval(1000))
)

clicks6$.subscribe( v => console.log(v))
