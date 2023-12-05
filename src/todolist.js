import React, {useState} from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("");
    
    const handleAddTodo = () => {
        if(newTodo.trim() !== "") {
            setTodos([...todos, {text: newTodo.trim(), checked: false}]);
            setNewTodo("");
        }
    };
    const handleDeleteTodo = (index) => {
       const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    const handleToggleTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].checked = !newTodos[index].checked;
      setTodos(newTodos);
    };
    const handleEditTodo = (index) => {
        const newTodos = [...todos];
          newTodos[index].edit = !newTodos[index].edit;
        setTodos(newTodos);
    };
   
return (
 <div className="container">
    <h1>To-Do List</h1>
    <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
    <button onClick={handleAddTodo}>Add</button>
    <ul>
         {todos.map((todo, index) => (
            <li key={index} style={{display: "flex" }}>
            <div style={{display: "flex", alignItems: "center"}}>
            <input 
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleToggleTodo(index)}
            />
            <span 
            style={{
                marginRigth: "10px",
                textDecoration: todo.checked ? "Line-through" : "none",
            }}>
                {todo.text}
            </span>
            </div>
               <button style={{marginTop: "5px", marginBottom: "5px"}} onClick={() =>handleDeleteTodo(index)}>Delete</button>
               <button onClick ={()=>handleEditTodo(index)}>Edit</button>
            </li>
            ))}
    </ul>
 </div>
)
};

export default TodoList;