import { useState } from "react";


export default function TodoList() {
    let [todo, setTodo] = useState(["sample Task"]);
    let [newtodo, setNewtodo] = useState("");

    let addNewtask = () => {
        setTodo([...todo, newtodo]);
        setNewtodo("");
    };

    let updateNewTodoVal = (event) => {
        setNewtodo(event.target.value);
    };

    return (
        <div  className="todo-container">
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter task"
                    value={newtodo}
                    onChange={updateNewTodoVal}
                />
                <br />
                <button onClick={addNewtask}>Add</button>
            </div>

            <div className="todo-list-container">
                <h1>To-do List</h1>
                <ul>
                    {todo.map((task, index) => {
                        return <li key={index}>{task}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}



// import { useState } from "react"

// export default function TodoList() {
//     let [todo, setTodo] = useState(["sample Task"]);
//     let [newtodo, setNewtodo] = useState("");
//     let addNewtask = () => {
//         setTodo([...todo, newtodo]);
//         setNewtodo("");
//     }
//     let updateNewTodoVal = (event) => {
//         setNewtodo(event.target.value);
//     }
//     let style1 = { backgroundColor: "violet", height: "20vh" }
//     return (
//         <div >
//             <div style={style1}>
//                 <input style={{ margin: "1rem" }} type="text" placeholder="enter" value={newtodo} onChange={updateNewTodoVal} />
//                 <br />
//                 <button  onClick={addNewtask}>Add</button>
//             </div>

//             <div style={{backgroundColor:"darkViolet", padding:"5px"}}>
//                 <h1 style={{border:"2px solid white"}}>To do list</h1>
//                 <ul>
//                     {
//                         todo.map((todo) => {
//                             return <li>{todo}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         </div>
//     )
// }