import { nanoid } from 'nanoid'
import { useState } from 'react';

const Create = (props) => {

    const todos = props.todo;
    const settodos = props.settodo;

    const [title, settitle] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: nanoid(),
            title: title,
            isCompleted: false,

        }
        settodos([...todos, newTodo])
        settitle("")
    }

    return (
        <>
            <div className="register-task">
                <h1>Create Task</h1>

                <form onSubmit={submitHandler}>
                    <input type="text" value={title} placeholder='' onChange={(e) => {settitle(e.target.value)}} />
                    <button>Create Task</button>
                </form>
            </div>

            
        </>
    )
}

export default Create
