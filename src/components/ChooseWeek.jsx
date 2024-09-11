import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";

export function ChooseWeek() {
    const {weeks} = useContext(GlobalContext);
    console.log(weeks);
    
    return (
        <div>
           {weeks?.map((week, index)=> {
            return <button key={week.id || index}>{week.name}</button>
           })}
           
       </div>
        
    );
};