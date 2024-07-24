import { BehaviorSubject } from "rxjs";

class BSDataService {
    private initialValue = { name: 'Alex', age: 11};
    private controlSequence$$ = new BehaviorSubject(this.initialValue);
    
    public getData(){
        return this.controlSequence$$.asObservable();
    }
    
    public sendData(data: any){
        this.controlSequence$$.next(data);
    }
}

export const instanceBS = new BSDataService();