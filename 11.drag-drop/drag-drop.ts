import { concatMap, fromEvent, map, Observable, takeUntil } from "rxjs";


export function drag(
    source1$: Observable<MouseEvent>,
    source2$: Observable<MouseEvent>, 
    source3$: Observable<MouseEvent>) {
    
    return source1$
        .pipe(
            concatMap( startEvent => {
                return source2$
                    .pipe(
                        map(moveEvent => {
                            moveEvent.preventDefault();
                            return {
                                left: moveEvent.clientX - startEvent.offsetX,
                                top: moveEvent.clientY - startEvent.offsetY
                            }
                        }),
                        takeUntil(source3$)
                    )
            })
        )   
}