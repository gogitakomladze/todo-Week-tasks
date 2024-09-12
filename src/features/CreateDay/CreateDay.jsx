import {v4 as uuidv4 } from "uuid"

import { useContext, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"

import { SContainer } from "../../components/SContainer"
import { Sinput } from "../../components/SInput"
import { SButton } from "../../components/SButton"

export function CreateDay()  {
const { currentWeek,setDays} = useContext(GlobalContext);
const [dayName, setdayName] = useState("");

function CreateNewDay() {
    const newDay = {id: uuidv4, name: dayName, weekId: currentWeek};
    setDays((prev) => [...prev, newDay])
    setdayName("");
}

    return (
       <SContainer>
        <Sinput placeholder="Enter CreateDay" value={dayName} onChange={(e) => setdayName(e.target.value)}/>
        <SButton disabled={!currentWeek} onClick={CreateNewDay}>CreateDay</SButton>
       </SContainer> 
    )
}