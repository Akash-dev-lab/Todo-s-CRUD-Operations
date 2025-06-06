import ReceipeCard from "../components/ReceipeCard"


const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem("fav")) || []

  console.log(favourite)

  const renderReciepe = favourite.map((reciepe) => (
    <ReceipeCard key={reciepe.id} reciepe={reciepe} />
  ))

  return (
    <div className="flex flex-wrap">
      {favourite.length > 0 ? renderReciepe : "No Favourite Found !"}
    </div>
  )
}

export default Fav
