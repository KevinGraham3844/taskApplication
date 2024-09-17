import { useDispatch } from 'react-redux';
import { logoutUser } from '../../reducers/userReducer';
import { clearTasks } from '../../reducers/tasksReducer';

function TaskHeaderButtons({ setVisibility }) {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
        dispatch(clearTasks());
    };

    return (
      <div className="flex flex-row justify-between">
        <button
          type="button"
          className="mt-7 ml-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => setVisibility(true)}
        >
          New Task
        </button>
        <button
          type="button"
          className="mt-7 mr-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={logout}
        >
          logout
        </button>
      </div>
    );
}

export default TaskHeaderButtons;
