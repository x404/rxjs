interface IListener {
    next(message: string): void;
}

class Producer{
    private listeners: IListener[] = [];
    
    
    public subscribe(listener: IListener){
        const index = this.listeners.push(listener);
        return{
            unsubscribe: () => {
                console.log("=>(index.ts:14) index", index);
                this.listeners.splice(index - 1, 1)
            }
        }
    }
    
    public notify(message: string){
        this.listeners.forEach( listener => {
            listener.next(message);
        })
    }
}


const listener1 = {
    next(message: string) {
        console.log('listener 1', message)
    }
}

const listener2 = {
    next(message: string) {
        console.log('listener 2', message)
    }
}

const notifier = new Producer();


const sub1 = notifier.subscribe(listener1);
const sub2 = notifier.subscribe(listener2);

notifier.notify('Hi all RxJS');

sub1.unsubscribe();

setTimeout(() => {
    notifier.notify('after unsubscribe')
}, 3000)