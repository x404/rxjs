import { fromEvent, map, merge, Observable, pluck, tap, zip } from "rxjs";

// fromEvent<TouchEvent>(document, 'touchstart')
//     .pipe(
//         tap((v) => {
//             console.log(v)
//         }),
//         map( (event: TouchEvent) => {
//             return event.changedTouches[0].clientX;
//         })
//         // pluck('changedTouches', '0', 'clientX')
//     )
//     .subscribe( v => {
//         console.log(v);
//     })
// ;

swipe(
    zip(
        getX(
            fromEvent<TouchEvent>(document, 'touchstart'),
            fromEvent<MouseEvent>(document, 'mousedown')
        ),
        getX(
            fromEvent<TouchEvent>(document, 'touchend'),
            fromEvent<MouseEvent>(document, 'mouseup')
        ),
    )
)
    .subscribe( (direction) => {
        if (direction < 0) {
            console.log('swipe left');
            return;
        }
        console.log('swipe right');
    })

function getX(source1$: Observable<TouchEvent>, source2$: Observable<MouseEvent>): Observable<number> {
    return merge(source1$, source2$).pipe(
        map( (event: TouchEvent | MouseEvent) => {
            if (event instanceof TouchEvent){
                return event.changedTouches[0].clientX;
            }
            return event.clientX;
        })
    )
}

function swipe(source$: Observable<[number, number]>){
    return source$
        .pipe(
            map( ([x,y]) => y - x)
        )
}