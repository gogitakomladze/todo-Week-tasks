import React, {useContext} from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { SChooseWeek, SChooseWeekButton } from "./ChooseWeek.styled";

export function ChooseWeek() {
    const {weeks, currentWeek, setCurrentWeek} = useContext(GlobalContext);
    
    return (
        <SChooseWeek>
           {weeks?.map((week, index)=> {    
            const isactive = currentWeek === week.id;  
            return(

            <SChooseWeekButton 
            key={week.id || index} 
            isactive={isactive}
            onClick={() => setCurrentWeek(week.id)}
            >
            {week.name}
            </SChooseWeekButton>
          )})}
           
       </SChooseWeek>
        
    );
};
