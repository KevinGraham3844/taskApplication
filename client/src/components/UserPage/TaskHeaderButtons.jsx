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
      <div className="mt-2 flex flex-row justify-between">
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
          onClick={() => setVisibility(true)}
        >
          New Task
        </button>
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
          onClick={logout}
        >
          logout
        </button>
      </div>
    );
}

export default TaskHeaderButtons;
