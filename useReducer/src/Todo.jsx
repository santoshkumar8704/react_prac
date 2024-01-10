import { ACTIONS } from "./App"
export default function Todo({  todo ,dispatch}) {
  return (
    <div style={{color : todo.completed ? "black" : "gray"}}>
              <li>{todo.name}</li>
        <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO,payload: {id:todo.id}})}>complete</button>
        <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO,payload: {id:todo.id}})}>delete</button>
    
    </div>
  );
}
