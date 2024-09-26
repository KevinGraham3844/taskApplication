/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import Task from './Task';
import TaskEdit from './TaskEdit';

function TaskList({ tasks }) {
  const [visible, setVisibility] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [viewPriority, setViewPriority] = useState(false);
  const [viewDate, setViewDate] = useState(false);

  const priorities = ['Low', 'Medium', 'High'];
  const dateSortedTasks = [...tasks].sort((a, b) => new Date(a.dueDate.split('T')[0]) - new Date(b.dueDate.split('T')[0]));
  const priorityTasks = [...tasks].sort((a, b) => priorities.indexOf(a.priority) - priorities.indexOf(b.priority));
  const priorityDateSortedTasks = [...tasks].sort((a, b) => (new Date(a.dueDate.split('T')[0]) - new Date(b.dueDate.split('T')[0]))
  || priorities.indexOf(a.priority) - priorities.indexOf(b.priority));

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
                  <th scope="col" className="hidden sm:table-cell px-1 py-2 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">
                    Priority
                    {!viewPriority && (
                      <FontAwesomeIcon
                        className="ml-1 text-lg cursor-pointer"
                        icon={faSortUp}
                        onClick={() => {
                        setViewPriority(true);
                        }}
                      />
                    )}
                    {viewPriority && (
                      <FontAwesomeIcon
                        className="ml-1 text-lg cursor-pointer"
                        icon={faSortDown}
                        onClick={() => {
                        setViewPriority(false);
                        }}
                      />
                    )}
                  </th>
                  <th scope="col" className="hidden lg:table-cell px-1 py-2 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Category</th>
                  <th scope="col" className="px-1 py-2 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">
                    Due Date
                    {!viewDate && (
                      <FontAwesomeIcon
                        className="ml-1 text-lg cursor-pointer"
                        icon={faSortUp}
                        onClick={() => {
                        setViewDate(true);
                        }}
                      />
                    )}
                    {viewDate && (
                      <FontAwesomeIcon
                        className="ml-1 text-lg cursor-pointer"
                        icon={faSortDown}
                        onClick={() => {
                        setViewDate(false);
                        }}
                      />
                    )}
                  </th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {!viewPriority && !viewDate && (
                  tasks.map(task => (
                    <Task
                      key={task.id}
                      task={task}
                      setTasktoEdit={setTaskToEdit}
                      setVisibility={setVisibility}
                    />
                  )))}
                {viewPriority && !viewDate && (
                  priorityTasks.map(task => (
                    <Task
                      key={task.id}
                      task={task}
                      setTasktoEdit={setTaskToEdit}
                      setVisibility={setVisibility}
                    />
                  )))}
                {!viewPriority && viewDate && (
                  dateSortedTasks.map(task => (
                    <Task
                      key={task.id}
                      task={task}
                      setTasktoEdit={setTaskToEdit}
                      setVisibility={setVisibility}
                    />
                  )))}
                {viewPriority && viewDate && (
                  priorityDateSortedTasks.map(task => (
                    <Task
                      key={task.id}
                      task={task}
                      setTasktoEdit={setTaskToEdit}
                      setVisibility={setVisibility}
                    />
                  )))}
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
