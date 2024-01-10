import { useReducer, useState } from "react"
import Todo from "./Todo";
export const ACTIONS = {
  ADD_TODO : "addToDo",
  TOGGLE_TODO :  "toggleToDo",
  DELETE_TODO : "deleteToDo"
}
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos; // Return current state for unrecognized actions
  }
}

function newTodo(name) {
  return {id: Date.now(),name: name,completed : false}
}

export default function App () {
  const[name,setName] = useState('');
  const[todos,dispatch] = useReducer(reducer,[])


  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type : ACTIONS.ADD_TODO,payload: {name} })
    setName('')
  }
  console.log(todos)
  return(
    <>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => {setName(e.target.value)}} value={name}/>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
    </>
  )
}