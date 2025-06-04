const RenderTask = (props) => {

    const todo = props.todo;
    const settodo = props.settodo;

    //Delete Functionality

    const DeleteHandler = (id) => {
        const filterTodo = todo.filter((todo) => todo.id !== id)
        settodo(filterTodo)
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
