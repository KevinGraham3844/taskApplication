/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import Task from './Task';
import TaskEdit from './TaskEdit';

function TaskList({ tasks }) {
  const [visible, setVisibility] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <div className="flex flex-col ">
      <div className="-m-1.5 min-w-full inline-block align-middle">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Completed</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Tasks</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Priority</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Category</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Due Date</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {tasks.map(task => (
                  <Task
                    key={task.id}
                    task={task}
                    setTasktoEdit={setTaskToEdit}
                    setVisibility={setVisibility}
                  />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TaskEdit task={taskToEdit} visible={visible} setVisibility={setVisibility} />
    </div>
  );
}

export default TaskList;
