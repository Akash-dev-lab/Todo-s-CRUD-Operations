import { nanoid } from 'nanoid'
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { todoContext } from "../Wrapper";

const Create = () => {

    const [todo, settodo] = useContext(todoContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submitHandler = (data) => {
        data.id = nanoid()
        data.isCompleted = false

        settodo([...todo, data])
        toast.success("Task Created !")
        reset()
    }

    return (
        <>
            <div className="register-task">
                <h1>Create Task</h1>

                <form onSubmit={handleSubmit(submitHandler)}>
                    <input type="text" {...register("title", { required: "This field is required" })} name='title' placeholder='title' />
                    <small>{errors?.title?.message}</small>
                    <button>Create Task</button>
                </form>
            </div>

            
        </>
    )
}

export default Create
