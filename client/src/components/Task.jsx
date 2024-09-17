/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch } from 'react-redux';
import { editTask } from '../reducers/tasksReducer';

function Task({ task }) {
  const dispatch = useDispatch();

  const changeComplete = () => {
    const changedTask = {
      ...task,
      completed: !task.completed,
    };
    console.log(changedTask);
    dispatch(editTask(changedTask));
  };

  return (
    <tr>
      <td>
        <label>
          <input
            onChange={changeComplete}
            type="checkbox"
            className="mt-3 ml-11"
          />
        </label>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{task.title}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{task.priority}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{task.category}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{task.dueDate.slice(0, 10)}</td>
    </tr>
  );
}

export default Task;
