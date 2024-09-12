import React, {useContext} from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { SContainer } from "@src/components/SContainer";
import { SButton } from "../../components/SButton";

export function ChooseWeek() {
    const {weeks, currentWeek, setCurrentWeek} = useContext(GlobalContext);
    
    return (
        <SContainer>
           {weeks?.map((week, index)=> {    
            const isactive = currentWeek === week.id;  
            return(

            <SButton 
             key={week.id || index} 
             isactive={isactive}
             onClick={() => setCurrentWeek(week.id)}
             >
             {week.name}
            </SButton>
           )})} 
           
       </SContainer>
        
    );
};
