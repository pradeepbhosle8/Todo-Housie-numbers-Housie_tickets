import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { FaListCheck, FaCheckDouble, FaArrowDown } from "react-icons/fa6";
import { IoMdAddCircleOutline, IoMdArrowUp, IoMdArrowDown } from "react-icons/io";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";

const Todochecklist = () => {

  // Holds the list of tasks
  const [task, setTask] = useState([]);

  // Holds the current input value for a new task
  const [inputValue, setInputValue] = useState('');

  // Holds current filter tyep
  const [filter, setFilter] = useState('all');

  // Holds ID of task being edited
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Indicates if tasks are being loaded from the API
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10; // Items per page

  // Fetch initial data 
  useEffect(() => {
    fetchTasks();
  }, [currentPage])

  // Fetch todo from api
  const fetchTasks = async () => {
    try {
      const response = await fetch(`http://localhost:3001/tasks?_page=${currentPage}&_per_page=${limit}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const tasks = await response.json();
      // console.log(tasks.data)
      setTask(tasks.data);
      setLoading(false);
    } catch (error) {
      console.log("Error Feaching Tasks: ", error);
      setLoading(false);
      toast.error("Failed to fetch tasks. Please try again later.");
    }
  }

  // Handle input change
  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setInputValue(e.target.value);
  }


  // handle add task
  const handleAddTask = async () => {
    console.log(inputValue)
    if(inputValue.trim() === ''){
      toast.error("Task cannot be empty!");
      return ;
    }

    const newtask = {
      id: Date.now(),
      task: inputValue,
      completed: false
    }
    // console.log(newtask)

    try {
      const response = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newtask)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const createdTask = await response.json();
      // setTask([...task, createdTask]);
      setTask(prevTasks => [...prevTasks, createdTask]);
      setInputValue('');
      toast.success("Task added successfully!");

      
    } catch (error) {
        console.log("Error Adding Task: ", error);
        toast.error("Failed to add task. Please try again later.");
    }
  }
  
    // Handle Task Checkbox Change
    const handleTaskCheckboxChange = async (id) => {
      // console.log(id)
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed: !task.find(t => t.id === id).completed })
      });
      // setTask(prevTasks => prevTasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    }

    
  // Handle Edit Task
  const handleEditTask = (id) => {
    setEditingTaskId(id);
    const taskToEdit = task.find(t => t.id === id);
    // console.log(taskToEdit.task)
    setInputValue(taskToEdit.task);
  }

  // handle update task
  const handleUpdateTask = async () => {
    if(inputValue.trim() === ''){
      toast.error("Task cannot be empty!");
      return ;
    }
    const updatedTask = {
      task: inputValue,
      completed:false
    }

    try {
      const response = await fetch(`http://localhost:3001/tasks/${editingTaskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTask(prevTasks => prevTasks.map(t => t.id === editingTaskId ? data : t));
      setInputValue('');
      setEditingTaskId(null);
      toast.success("Task updated successfully!");
      
    } catch (error) {
        console.log("Error Updating Task: ", error);
        toast.error("Failed to update task. Please try again later.");
    }
  }



  // Handle Delete Task
  const handleDeleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setTask(prevTasks => prevTasks.filter(t => t.id !== id));
      toast.success("Task deleted successfully!");
    } catch (error) {

        console.log("Error Deleting Task: ", error);
        toast.error("Failed to delete task. Please try again later.");
    }
  }

  // tasks move up
  const handleMoveTaskUp = (id) => {
if(id === task[0].id) return; // If it's the first task, do nothing
const newTasks = [...task];
const index = newTasks.findIndex(t => t.id === id);
// Swap the tasks
[newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
setTask(newTasks);
  }

  // tasks move down
  const handleMoveTaskDown = (id) => {
    if(id === task[task.length - 1].id) return; // If it's the last task, do nothing
    const newTasks = [...task];
    const index = newTasks.findIndex(t => t.id === id);
    // Swap the tasks
    [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
    setTask(newTasks);

  }

  // Handle Filter change
  const handleFilterchange = (filterType) => {
    setFilter(filterType);
   
  }
  // Filter tasks based on the selected filter
  const filteredTasks = task.filter((t) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return t.completed;
    if (filter === 'uncompleted') return !t.completed;
    return true;
  });




  return (
    <>
      {/* {console.log(task)} */}

      <div className='container m-auto p-4'>
        <div className='bg-white border border-gray-500 max-w-180 p-4 mt-3 m-auto rounded-lg shadow-md'>
          
          <h2 className='text-2xl font-bold mb-4 flex items-center gap-2 justify-center'>
            
            <FaListCheck />
            Todo Checklist</h2>
            

          <div className='flex justify-normal items-center group'>
            <FaListCheck className=' text-gray-700 animate-pulse mr-1.5 ' />
            <textarea name="" id="" cols="0" rows="1" 
                      placeholder='Enter your task' 
                      className='border border-gray-400 outline-none p-2 rounded w-full m-w-[100%] focus:ring-1 focus:ring-blue-500' 
                      value={inputValue}
                      onChange={handleInputChange}></textarea>

            {/* <input type="text" 
                   placeholder='Enter your task' 
                   className='border border-gray-400  outline-none p-2 rounded w-100 focus:ring-1 focus:ring-blue-500' 
                   value={inputValue}
                   onChange={handleInputChange} /> */}

            <button className='bg-blue-500 w-50 flex items-center  text-white p-2.5 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer' onClick={editingTaskId ? handleUpdateTask : handleAddTask}>
              <IoMdAddCircleOutline className='text-xl outline-0 mr-1' />
              {editingTaskId ? 'Update Task' : 'Add Task'}
            </button>
          </div>

          <div className='flex items-center justify-between py-3 '>
    
            <p className='cursor-pointer mr-2 flex  items-left'><FaCheckDouble className='text-gray-500 mr-1' />Complete all tasks</p>
            {/* <p className='cursor-pointer'>Delete completed tasks</p> */}
            <div>
              <p className='text-green-700 '>Completed : <span className='font-bold'>{task.filter(t => t.completed).length}</span></p>
            </div>
            <div>
              <p className='text-yellow-700 '>Pending : <span className='font-bold'>{task.filter(t => !t.completed).length}</span></p>
            </div>
            <div>
              <p>Total Tasks: <span className='font-bold'>{task.length}</span></p>
            </div>

            <div className='dropdown inline-block relative group'>
              <button className='bg-blue-400 dark:bg-blue-700 text-white dark:text-white font-semibold p-2 rounded inline-flex items-center cursor-pointer'>
                <span className="mr-1">Filter</span>
                <IoMdArrowDown />
              </button>
              <ul  className="absolute z-10 hidden text-gray-700 dark:text-gray-300 pt-1 mb-3 group-hover:block w-auto">

                <li className=""><a className="rounded-t bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                   onClick={()=> handleFilterchange('all')}>All</a></li>

                <li className=""><a className="bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap cursor-pointer"  onClick={()=> handleFilterchange('uncompleted')}>Uncompleted</a></li>

                <li className=""><a className="rounded-b bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap cursor-pointer"  onClick={()=> handleFilterchange('completed')}>Completed</a></li>

              </ul>
            </div>
          </div>

          <div>
            <table className='table table-auto w-full border-collapse '>
              <thead className='bg-blue-200 '>
                <tr>
                  {/* <th className='border-b-2 border-gray-300 p-2 text-left'>ID</th> */}
                  <th className='border-b-2 border-gray-300 p-2 text-left'>Task</th>
                  <th className='border-b-2 border-gray-300 p-2 text-left '>Status</th>
                  <th className='border-b-2 border-gray-300 p-2 text-left float-end'>Actions</th>

                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="3" className='text-center p-4'>Loading tasks...</td>
                  </tr>
                ) : (
                  task.length === 0 ? (
                    <tr>
                      <td colSpan="3" className='text-center p-4'>No tasks found. Add a new task!</td>
                    </tr>
                  ) : (
                    filteredTasks.map((t, i) => (
                      <tr key={t.id} className='border-b border-gray-300'>
                        {/* <td className='p-2'>{t.id}</td> */}
                        <td className={t.completed ? 'line-through text-gray-500' : 'text-gray-700'} >
                          <input type="checkbox" checked={t.completed} onChange={() => handleTaskCheckboxChange(t.id)} /> {t.task}
                        </td>
                        <td className={t.completed ? 'text-green-500 ' : 'text-yellow-500'}>
                          {t.completed ? 'Completed' : 'Pending'}
                        </td>
                        <td className='p-2 float-end'>
                          <button className='bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer' onClick={() => handleEditTask(t.id)}>
                            <HiOutlinePencilSquare />
                          </button>
                          <button className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer' onClick={() => handleDeleteTask(t.id)}>
                            <FaRegTrashAlt />
                          </button>
                          <button className='bg-blue-500 text-white px-2 py-1 rounded ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer' onClick={() => handleMoveTaskUp(t.id)}>
                            <IoMdArrowUp />
                          </button>
                          <button className='bg-blue-500 text-white px-2 py-1 rounded ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer' onClick={() => handleMoveTaskDown(t.id)}>
                            <IoMdArrowDown />
                          </button>
                        </td>
                      </tr>
                    ))
                  )
                )}
                
              </tbody>
              
            </table>
            <div className='flex justify-center mt-4 gap-4'>
               <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</button>
      <span className='bg-gray-200 text-gray-700 px-4 py-2 rounded'>Page {currentPage}</span>
      <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
    </div>
            
            
            
          </div>


        </div>



      </div>

    </>
  )
}

export default Todochecklist