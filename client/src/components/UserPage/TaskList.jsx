/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import Task from './Task';
import TaskEdit from './TaskEdit';

function TaskList({ tasks }) {
  const [visible, setVisibility] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <div>
      <div>
        <div>
          <div>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th scope="col" className="px-1 py-2 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Completed</th>
                  <th scope="col" className="px-1 py-2 lg:text-start text-center text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Tasks</th>
                  <th scope="col" className="hidden sm:table-cell px-1 py-2 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Priority</th>
                  <th scope="col" className="hidden lg:table-cell px-1 py-2 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Category</th>
                  <th scope="col" className="px-1 py-2 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Due Date</th>
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
