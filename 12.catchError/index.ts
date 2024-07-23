import { catchError, EMPTY, interval, map, of, subscribeOn, tap, zip } from "rxjs";

const sequence1$ = interval(500);
const sequence2$ = of('1','2','3',4, '5', '6', '7');

const sequence = zip(sequence1$, sequence2$);

sequence
    .pipe(
        map( ([_x,y]: [number, number | string]) => {
            return (y as any).toUpperCase()
        }),
        tap(() => {
            // console.log('before catchError')
        }),
        catchError(err => {
            console.log(err);
            // return of(null);
            return EMPTY;
        //     після EMPTY поток обривається 
        }),
        tap((res) => {
            console.log('after catchError', res)
        }),
    )
.subscribe({ 
    next: (v) => {
        console.log('VALUE',v )
    },
    error: (err) => {
        console.log('ERR', err)
    },
    complete: () => {
        console.log('COMPLETE')
    }
})