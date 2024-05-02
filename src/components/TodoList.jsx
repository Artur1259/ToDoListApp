import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md";
import EditedTodo from "./EditedTodo";

function TodoList({
  todos,
  deleteTodo,
  onCompleted,
  clearCompletedItems,
  editItem,
  editTask,
  editItemTodo
}) {
  
    const checkedItems = todos.filter((todo) => todo.completed).length;
    
  return (
    <div className="overflow-y-auto max-h-[400px] custom-scrollbar">
      {todos.map((todo) =>
        todo.isEdit ? (
          <EditedTodo
            key={todo.id}
            editTask={editTask}
            editItemTodo={editItemTodo}
            task={todo}
          />
        ) : (
          <div key={Math.floor(Math.random() * 10000)} className="px-8 py-1">
            <div className="border rounded-md p-2 bg-slate-200 flex justify-between items-center">
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) =>
                    onCompleted({
                      ...todo,
                      completed: e.target.checked,
                    })
                  }
                />
                <span className="font-semibold text-xl pl-1">{todo.text}</span>
              </div>
              <div>
                <button
                  onClick={() => editItem(todo.id)}
                  className="px-1 text-purple-700 hover:text-orange-800"
                >
                  <AiOutlineEdit size={20} />
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-1 text-red-700 hover:text-blue-800"
                >
                  <AiOutlineDelete size={20} />
                </button>
              </div>
            </div>
          </div>
        )
      )}
      <div className="flex justify-between items-center font-semibold text-lg border bg-slate-200 p-2 rounded-md mx-8 mt-1">
        <span>
          {checkedItems}/{todos.length} Completed
        </span>
        <div className="flex justify-around items-center px-1">
          <span className="px-1">Clear Completed</span>
          <button onClick={clearCompletedItems}>
            <MdDeleteSweep size={25} />
          </button>
        </div>
      </div>
      <p className="font-semibold text-lg text-center pt-2">
        You have a {todos.length} todos
      </p>
    </div>
  );
}

export default TodoList;
