import { useContext } from "react"
import { reciepecontext } from "../context/ReciepeContext"
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify"

const SingleReciepe = () => {

    const { data, setdata } = useContext(reciepecontext)
    const navigate = useNavigate()
    const params = useParams()
    const receipe = data.find((receipe) => params.id == receipe.id)

    // console.log(receipe)

    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: receipe.title

        }
    })

    const submitHandler = (reciepe) => {
        const receipeindex = data.findIndex((receipe) => params.id == receipe.id)
        const copyData = [...data]
        copyData[receipeindex] = { ...copyData[receipeindex], ...reciepe }
        console.log(copyData)
        setdata(copyData)
        toast.success("Receipe Updated")
    }

    const DeleteHandler = () => {
        const filterData = data.filter((r) => r.id != params.id)
        setdata(filterData)
        toast.success("Receipe Deleted")
        navigate("/receipes")
    }

    return receipe ? (<div className="w-full flex">
        <div className="left w-1/2 p-2">
            <h1 className="text-5xl font-black">{receipe.title}</h1>
            <img className="h-[20vh]" src={receipe.image} alt="" />
            <h1>{receipe.chef}</h1>
            <p>{receipe.desc}</p>
        </div>

        <div className="right w-1/2 p-2">
            <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col w-[30%]'>
                <input className='border-b block outline-0 p-2' placeholder='Enter Image Url' type="url" {...register("image")} />
                <small className='text-red-400'>This is how the error is shown</small>
                <input className='border-b block outline-0 p-2' type="text" placeholder="Receipe Title" {...register("title")} />
                <input className='border-b block outline-0 p-2' type="text" placeholder="Chef" {...register("chef")} />
                <textarea className='border-b block outline-0 p-2' type="text" placeholder="Enter Details" {...register("des")} />

                <select className='border-b block outline-0 p-2' type="text" placeholder="Enter Details" {...register("category")} name="" id="">
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button className='mt-5 block bg-blue-900 px-4 py-2 rounded'>Update Reciepe</button>
                <button onClick={DeleteHandler} className='mt-5 block bg-red-900 px-4 py-2 rounded'>Delete Reciepe</button>
            </form>
        </div>
    </div>) : ("Loading...")
}

export default SingleReciepe
