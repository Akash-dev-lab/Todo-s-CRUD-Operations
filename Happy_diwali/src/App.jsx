import { useState } from "react";
import Create from "./components/Create";
import RenderTask from "./components/RenderTask";

const App = () => {

  const [todo, settodo] = useState([]);

  return (
    <>
      <Create todo={todo} settodo={settodo} />
      <RenderTask todo={todo} settodo={settodo}  />
    </>
  )
}

export default App
