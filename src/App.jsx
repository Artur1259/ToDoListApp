import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
      isEdit: false,
    },
    {
      id: 2,
      text: "Learn Vite",
      completed: false,
      isEdit: false,
    },
    {
      id: 3,
      text: "Learn React Router",
      completed: false,
      isEdit: false,
    },
  ]);

  const addTodoItem =(value,setValue) => {
    if(value !== ""){
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        text: value,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setValue("");
    }
    
  }
  const editItemTodo = (value,id) => {
    console.log(value);
    setTodos(
      todos.map((item)=>{
        if(item.id === id){
          return {...item, text: value, isEdit:!item.isEdit}
        }
        else{
          return item;
        }
      })
    )
  };

  const onCompleted = (newTodo) => {
    setTodos(
      todos.map(todo =>{
        if(todo.id === newTodo.id){
          console.log(newTodo)
          return newTodo;
        }
        else{
          return todo;
        }
      }
    ))
  };

  const editItem = (id) =>{
    setTodos(todos.map(todo =>{
      return todo.id === id ? {...todo, isEdit: !todo.isEdit} : todo
    }));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompletedItems = () => {
    setTodos(todos.filter((todo)=> !todo.completed));
  };
  const editTask = (id,task) => {
    setTodos(todos.map((todo)=>{
        todo.id = id ? {...todo, task, isEdit: !todo.isEdit} :todo
    }));
  }
  return (
    <div className="w-full h-screen flex justify-center items-center px-10 bg-gradient-to-r from-[#2f80ed] via-[#1cb5e0] to-[#2f80ed] ">
      <div className="bg-slate-300/85 rounded-lg max-w-[700px] w-full py-5">
        <TodoInput addTodoItem={addTodoItem}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} onCompleted={onCompleted} clearCompletedItems={clearCompletedItems} editItem={editItem} editTask={editTask} editItemTodo={editItemTodo}/>
      </div>
    </div>
  );
}

export default App;
