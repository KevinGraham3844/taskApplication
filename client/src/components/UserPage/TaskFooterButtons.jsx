import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../../reducers/tasksReducer';

function TaskFooterButtons({ tasks }) {
    const dispatch = useDispatch();

    const completeTasks = () => {
        tasks.forEach(task => {
            if (!task.completed) {
                const completedTask = {
                    ...task,
                    completed: true,
                };
                dispatch(editTask(completedTask));
            }
        });
    };

    const deleteCompleted = () => {
        tasks.forEach(task => {
            if (task.completed) {
                dispatch(deleteTask(task.id));
            }
        });
    };

    return (
      <div className="flex flex-row justify-between">
        <div>
          <button
            onClick={completeTasks}
            type="button"
            className="ml-5 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Complete All Tasks
          </button>
        </div>
        <div>
          <button
            onClick={deleteCompleted}
            type="button"
            className="mr-5 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Clear Completed
          </button>
        </div>
      </div>
    );
}

export default TaskFooterButtons;
