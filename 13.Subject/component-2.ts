import { instance } from "./service";
import { instanceBS } from "./service-2";

instance.getData().subscribe( (v) => {
    // Проблема заключается в том, что instance.sendData() вызывается до того, как instance.getData() завершит обработку всех событий.
    // поэтому используется setTimeout
    console.log(v);
})


// BehaviorSubject решает эту проблему. Потом становится холодным. 
instanceBS.getData().subscribe( (v) => {
    console.log(v);
})

