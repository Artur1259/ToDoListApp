import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";

function EditedTodo({ editItemTodo,task }) {
  const [value, setValue] = useState("");
  
  return (
    <div className="px-8 pb-4">
     
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add Todo..."
            className=" w-full rounded-md py-3 px-5 bg-gray-200 focus:outline-none text-gray-700"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={()=>editItemTodo(value,task.id, setValue(""))}
            className="bg-purple-500 rounded-md px-2"
          >
            <MdAddCircle size={25} color="white" />
          </button>
        </div>
      </div>
    
  );
}

export default EditedTodo;
