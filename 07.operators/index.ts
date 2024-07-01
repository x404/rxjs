// of
// https://rxmarbles.com/

import { filter, first, interval, map, skip, take, tap } from "rxjs";
const sequence1$ = interval(1000);


/*
*  sequence1$ ---0---1---2---3---4---5---
*       tap(v=> {
*           console.log(v);
*           return [1,2,3,4]
*       })
*       ---0---1---2---3---4---5---
* 
*       filter(x=>x%2===0)
*       ---0-------2-------4-------
* 
*       map(x=>x**2)
*       ---0-------4-------16--------
* 
*       skip(2)
*       -------------------16-------
* 
*       take(1)
*       -------------------16|
*  
* 
* //sequence2$ ---0---1---4---9---16---25---
* */

sequence1$
    .pipe(
       tap(v=> {
           // console.log(v);
           return [1,2,3,4];
       }),
        filter(x=>x%2===0),
        map(x => x ** 2),
        skip(2),
        first()
    )
    .subscribe((v) => {
    console.log('Result ', v);
})