import { debounceTime, fromEvent, pluck } from "rxjs";

const el = document.querySelector("input") as HTMLInputElement;

fromEvent(el, "input").pipe(
    debounceTime(1000),
    pluck("target", "value"),
).subscribe( v =>{
    console.log(v)
})
