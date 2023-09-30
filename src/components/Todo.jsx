import { useState } from "react";

const Todo = () => {
  // initialize the tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  // handle add Tasks
  const addTasks = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  // handle remove tasks
  const deleteTasks = (index) => {
    const updated = [...tasks];
    // delete updated[index];
    updated.splice(index, 1);
    setTasks(updated);
  };
  return (
    <div className="flex flex-col items-center">
      {/* title */}
      <div className="m-14">
        <h1 className=" text-4xl font-bold">To-do Application</h1>
      </div>
      <div className="flex mb-5 ">
        <input
          type="text"
          className="rounded-md bg-gray-100 p-3 mr-3"
          placeholder="task description ..."
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button
          onClick={addTasks}
          className="material-icons px-5 bg-green-400 hover:bg-green-600 duration-300 text-white rounded-md "
        >
          add
        </button>
      </div>
      {/* tasks */}
      <div>
        {tasks?.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <div
                className="flex  justify-between w-72 rounded-md p-2 mb-5 bg-slate-200"
                key={index}
              >
                <li className=" font-semibold p-2">{task}</li>
                <div className="flex gap-5">
                  <button
                    // onClick={changeTask(index)}
                    className="bg-blue-500 text-white p-2 font-bold rounded-md hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deleteTasks(index);
                    }}
                    className="bg-red-500 text-white p-2 font-bold rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <div>
            <p>No Task Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
