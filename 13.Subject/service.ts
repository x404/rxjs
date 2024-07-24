import { Subject } from "rxjs";

class DataService {
    private controlSequence$$ = new Subject();
    
    public getData(){
        return this.controlSequence$$.asObservable();
    }
    
    public sendData(data: any){
        this.controlSequence$$.next(data);
    }
}

export const instance = new DataService();