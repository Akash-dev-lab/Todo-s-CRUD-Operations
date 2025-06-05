import { useContext } from "react";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";

const RenderTask = () => {

    const [todo, settodo] = useContext(todoContext)

    //Delete Functionality

    const DeleteHandler = (id) => {
        const filterTodo = todo.filter((todo) => todo.id !== id)
        settodo(filterTodo)
        toast.error("Task Deleted !")
    }

    const renderTask = todo.map(task => {
        return <li key={task.id}>{task.title} | <span onClick={() => DeleteHandler(task.id)}>Delete</span> </li>
    })

    return (
        <>
            <div>
                <h1>Rendering Tasks</h1>
                <h2>{renderTask}</h2>
            </div>
        </>
    )
}

export default RenderTask
