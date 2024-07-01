import { Observable } from "rxjs";

const socket: WebSocket = new WebSocket('wss://echo.websocket.org/');
const sequence$ = new Observable( (subscriber) => {
    socket.addEventListener('message', (e) => {
        subscriber.next(e)
    })
});

const sub1 = sequence$.subscribe( (v:any) => {
    console.log('Sub 1', v.data)
})


socket.addEventListener("open", (event) => {
    let count = 1;
    const intervalId = setInterval( () => {
        socket.send((count++).toString());
    }, 1000);
});


setTimeout( () => {
    const sub2 = sequence$.subscribe( (v:any) => {
        console.log('Sub 2', v.data);
    })
}, 5000)


// Sub 1 1
// index.ts:11 Sub 1 2
// index.ts:11 Sub 1 3
// index.ts:11 Sub 1 4
// index.ts:11 Sub 1 5

// index.ts:25 Sub 2 5
// index.ts:11 Sub 1 6
// index.ts:25 Sub 2 6
// index.ts:11 Sub 1 7
// index.ts:25 Sub 2 7
// index.ts:11 Sub 1 8
// index.ts:25 Sub 2 8
// index.ts:11 Sub 1 9
// index.ts:25 Sub 2 9
// index.ts:11 Sub 1 10
// index.ts:25 Sub 2 10
// index.ts:11 Sub 1 11
// index.ts:25 Sub 2 11
// index.ts:11 Sub 1 12
// index.ts:25 Sub 2 12
// index.ts:11 Sub 1 13
// index.ts:25 Sub 2 13
// index.ts:11 Sub 1 14
// index.ts:25 Sub 2 14
// index.ts:11 Sub 1 15
// index.ts:25 