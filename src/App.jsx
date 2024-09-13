import { ChooseWeek } from "@src/features/ChooseWeek"
import { CreateDay } from "@src/features/CreateDay"
import { RenderDays } from "@src/features/RenderDays"

import { SApp } from "@src/App.styled"
function App() {

  return (
    <SApp> 
      <div>
     <ChooseWeek />
     <CreateDay/>
     <RenderDays/>
     </div>
    </SApp>
  )
}

export default App
