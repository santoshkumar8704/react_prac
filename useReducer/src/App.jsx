import { useReducer, useState } from "react"
const ACTIONS = {
  ADD_TODO : "addToDo"
}
function reducer (todos,action) {
  switch(action.type){
    case ACTIONS.ADD_TODO :
      return [...todos,newTodo(action.payload.name)]
  }
}
function newTodo(name) {
  return {id: Date.now,name: name,completed : false}
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
    </>
  )
}