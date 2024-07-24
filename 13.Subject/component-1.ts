import {instance} from "./service";
import { instanceBS } from "./service-2";

setTimeout(() => {
    instance.sendData({name: 'John', age: 22})
}, 1000)


instanceBS.sendData({name: 'Alex', age: 13})
instanceBS.sendData({name: 'Alex', age: 5})