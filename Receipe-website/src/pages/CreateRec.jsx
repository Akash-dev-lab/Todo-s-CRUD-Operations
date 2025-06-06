import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { reciepecontext } from '../context/ReciepeContext'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CreateRec = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()
    const {data, setdata} = useContext(reciepecontext)

    const submitHandler = (reciepe) => {
        reciepe.id = nanoid()
        const copyData = [...data]
        copyData.push(reciepe)
        setdata(copyData)
        localStorage.setItem("reciepes", JSON.stringify(copyData))
        toast.success("New Reciepe Created !")
        navigate("/receipes")
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col w-[30%]'>
            <input className='border-b block outline-0 p-2' placeholder='Enter Image Url' type="url" {...register("image")} />
            <small className='text-red-400'>This is how the error is shown</small>
            <input className='border-b block outline-0 p-2' type="text" placeholder="Receipe Title" {...register("title")} />
            <input className='border-b block outline-0 p-2' type="text" placeholder="Chef" {...register("chef")} />
            <textarea className='border-b block outline-0 p-2' type="text" placeholder="Enter Details" {...register("des")} />

            <select className='border-b block outline-0 p-2' type="text" placeholder="Enter Details" {...register("category")}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="dinner">Dinner</option>
            </select>

            <button className='mt-5 block bg-gray-900 px-4 py-2 rounded'>Save Reciepe</button>
        </form>
    )
}

export default CreateRec
