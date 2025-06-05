import NavBar from './components/NavBar'
import './index.css'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  return (
    <div className='py-10 px-[10%] flex flex-col gap-10 items-center w-screen h-screen text-white font-thin bg-gray-800'>
      <NavBar />
      <MainRoutes />
    </div>
  )
}

export default App
