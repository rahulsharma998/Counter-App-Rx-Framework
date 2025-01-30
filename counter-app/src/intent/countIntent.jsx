export const keyboardCount=(actions)=>{
    const handlekey=(e)=>{
        if(e.key==="+")actions.increment$.next();
        if(e.key==="-")actions.decrement$.next();
        if(e.key==="0")actions.reset$.next();
    };
    window.addEventListener("keydown",handlekey);
    return()=>{
        window.removeEventListener("keydown",handlekey)
    };
};