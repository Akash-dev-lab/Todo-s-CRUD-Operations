import { useContext } from "react"
import { reciepecontext } from "../context/ReciepeContext"
import ReceipeCard from "../components/ReceipeCard"

const Receipes = () => {

  const { data } = useContext(reciepecontext)

  const renderReciepe = data.map((reciepe) => (
    <ReceipeCard key={reciepe.id} reciepe={reciepe} />
  ))

  return (
    <div className="flex flex-wrap">
      {data.length > 0 ? renderReciepe : "No Receipe Found !"}
    </div>
  )
}

export default Receipes
