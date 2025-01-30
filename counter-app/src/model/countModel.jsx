import {Subject, interval, merge, EMPTY} from "rxjs";
import { map,scan,startWith,switchMap, takeWhile } from "rxjs";

const increment$=new Subject();
const decrement$=new Subject();
const reset$=new Subject();
const autoIncrement$=new Subject();

export const actions={increment$,decrement$,reset$,autoIncrement$};

export const createCountModel=(setCount,autoIncrement)=>{
    return merge(
        increment$.pipe(map(()=>(c)=>Math.min(c+1,98))),
        decrement$.pipe(map(()=>(c)=>Math.max(c-1,0))),
        reset$.pipe(map(()=>()=>0)),
        autoIncrement$.pipe(switchMap((isOn)=>isOn?interval(1100).pipe(map(()=>(c)=>Math.min(c+1,98)),takeWhile(()=>autoIncrement)):EMPTY)))
        .pipe(startWith(()=>0),scan((acc,changefun)=>changefun(acc),0));
}