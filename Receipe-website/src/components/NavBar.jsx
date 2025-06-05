import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <div className="flex justify-center items-center gap-x-10 text-sm mb-10">
            <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/">Home</NavLink>
            <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/receipes">Receipes</NavLink>
            <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/about">About</NavLink>
            <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/create-receipes">Create Reciepe</NavLink>
        </div>
    )
}

export default NavBar
