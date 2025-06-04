import { nanoid } from 'nanoid'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Create = (props) => {

    const todos = props.todo;
    const settodos = props.settodo;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submitHandler = (data) => {
        data.id = nanoid()
        data.isCompleted = false

        settodos([...todos, data])
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
