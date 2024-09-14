import { v4 as uuidv4 } from 'uuid';

import { useContext, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"

import { Sinput } from "../../components/SInput"
import { SCreateButtom } from './ScreateDay.styled';

import { SCreateDay } from './ScreateDay.styled';

export function CreateDay()  {
const { currentWeek,setDays} = useContext(GlobalContext);
const [dayName, setdayName] = useState("");

function CreateNewDay() {
    const newDay = {id: uuidv4(), name: dayName, weekId: currentWeek};
    setDays((prev) => [...prev, newDay])
    setdayName("");
}

    return (
       <SCreateDay>
        <Sinput placeholder="Enter CreateDay" value={dayName} onChange={(e) => setdayName(e.target.value)}/>
        <SCreateButtom disabled={!currentWeek} onClick={CreateNewDay}>CreateDay</SCreateButtom>
       </SCreateDay> 
    )
}