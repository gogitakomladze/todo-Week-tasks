import React, {useContext} from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { SButton } from "../../components/SButton";
import { SButtoncontainer , SWeekContainer} from "./ChooseWeek.styled";
export function ChooseWeek() {
    const {weeks, currentWeek, setCurrentWeek} = useContext(GlobalContext);
    
    return (
        <SWeekContainer>
         <h2>Choos Week</h2>
        <SButtoncontainer>
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
           
       </SButtoncontainer>
       </SWeekContainer>

    );
};
