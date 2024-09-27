/* eslint-disable no-alert */
import { useDispatch } from 'react-redux';
import { Button, Popover } from 'flowbite-react';
import { deleteTask, editTask } from '../../reducers/tasksReducer';

function Task({ task, setVisibility, setTasktoEdit }) {
  // eslint-disable-next-line no-useless-escape
  const dueDateObject = new Date(task.dueDate.split('T')[0].replace(/-/g, '\/'));
  const todaysDate = new Date();

  const isToday = (todaysDate.getMonth() === dueDateObject.getMonth()
      && todaysDate.getDate() === dueDateObject.getDate()
  );

  const isTomorrow = ((todaysDate.getDate() + 1) === (dueDateObject.getDate())
      && todaysDate.getMonth() === dueDateObject.getMonth()
  );

  const isYesterday = ((todaysDate.getDate() - 1) === (dueDateObject.getDate())
      && todaysDate.getMonth() === dueDateObject.getMonth()
  );

  const dispatch = useDispatch();

  const changeComplete = () => {
    const changedTask = {
      ...task,
      completed: !task.completed,
    };
    dispatch(editTask(changedTask));
  };

  const deleteChosenTask = () => {
    if (window.confirm(
      'Are you sure you want to delete this task?',
    )) {
      dispatch(deleteTask(task.id));
    }
  };

  const openEdit = () => {
    setTasktoEdit(task);
    setVisibility(true);
  };

  console.log(isYesterday);

  const content = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-1 py-1 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">{task.title}</h3>
      </div>
      <div className="px-3 py-2">
        <p>{task.description}</p>
        <p className="block sm:hidden">
          <strong>
            Priority:
            {' '}
          </strong>
          {task.priority}
        </p>
        <p className="block lg:hidden">
          <strong>
            Category:
            {' '}
          </strong>
          {task.category}
        </p>
      </div>
    </div>
  );

  return (
    <tr>
      <td>
        <label>
          <input
            onChange={changeComplete}
            type="checkbox"
            className="ml-6"
            checked={task.completed ? 'checked' : ''}
          />
        </label>
      </td>
      <td>
        <Popover content={content} trigger="click">
          <Button size="xs" color="gray" className="mr-2">
            {task.title}
          </Button>
        </Popover>
      </td>
      <td className="hidden sm:table-cell px-1 py-2 whitespace-nowrap text-start text-sm font-medium text-gray-800 dark:text-neutral-200">{task.priority}</td>
      <td className="hidden lg:table-cell px-1 py-2 whitespace-nowrap text-start text-sm font-medium text-gray-800 dark:text-neutral-200">{task.category}</td>
      <td className="px-1 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
        {task.dueDate.slice(0, 10)}
        {isToday && (
          <p className="text-xs font-bold text-red-600">Due Today</p>
        )}
        {isTomorrow && (
        <p className="text-xs font-bold text-red-600">Due Tomorrow</p>
        )}
        {isYesterday && (
        <p className="text-xs font-bold text-red-600">Past Due</p>
        )}
      </td>
      <td>
        <div className="mb-3 ml-3">
          <button
            type="button"
            className="mt-5 text-white-700 border border-white-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            onClick={openEdit}
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
            </svg>
            <span className="sr-only">Edit Task</span>
          </button>
        </div>
      </td>
      <td>
        <div className="mb-3">
          <button
            type="button"
            className="mt-5 text-white-700 border border-white-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            onClick={deleteChosenTask}
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Delete Task</span>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Task;
