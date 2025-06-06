import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Receipes from "../pages/Receipes"
import CreateRec from "../pages/CreateRec"
import SingleReciepe from "../pages/SingleReciepe"
import PageNotFound from "../pages/PageNotFound"
import Fav from "../pages/Fav"

const MainRoutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receipes" element={<Receipes />} />
        <Route path="/receipes/detail/:id" element={<SingleReciepe />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-receipes" element={<CreateRec />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
}

export default MainRoutes
