import { ChooseWeek } from "@src/features/ChooseWeek"
import { CreateDay } from "@src/features/CreateDay"
import { RenderDays } from "@src/features/RenderDays"

import { SWeek, SApp, SDay } from "./App.styled"
function App() {

  return (
    <SApp> 
      <SWeek>
      <ChooseWeek />
      </SWeek>
      <SDay>
      <CreateDay/>
      </SDay>
      <RenderDays/>

    </SApp>
    
  )
}

export default App
