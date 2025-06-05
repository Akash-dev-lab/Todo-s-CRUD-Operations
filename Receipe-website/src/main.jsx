import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ReciepeContext from './context/ReciepeContext.jsx'

createRoot(document.getElementById('root')).render(
    <ReciepeContext>
        <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter >
    </ReciepeContext>
)
