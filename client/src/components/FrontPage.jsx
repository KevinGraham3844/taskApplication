import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retainUser } from '../reducers/userReducer';
import { initalizeTasks } from '../reducers/tasksReducer';
import UserPage from './UserPage';
import LoggedOutFront from './LoggedOutFront';
import taskService from '../services/task';

function FrontPage({ navigate }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const error = useSelector(state => state.errorNotification);
    const tasks = [...useSelector(state => state.tasks)];

    useEffect(() => {
      if (user) {
        dispatch(initalizeTasks(user.id));
        taskService.setToken(user.token);
      }
    }, [user]);

    useEffect(() => {
        console.log('dispatch');
        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if (loggedUserJSON) {
            console.log(JSON.parse(loggedUserJSON));
            dispatch(retainUser(JSON.parse(loggedUserJSON)));
            taskService.setToken(JSON.parse(loggedUserJSON).token);
        }
    }, [dispatch]);

    return (
      <>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">{error}</strong>
          </div>
        )}
        {!user && (
          <LoggedOutFront navigate={navigate} />
        )}
        <div className="bg-gradient-to-r from-slate-300 to-slate-500 h-screen w-screen flex items-center justify-center">
          <div className="max-w-2xl flex-col m-auto border-4 rounded-xl p-5 w-screen">
            {user && tasks && (
            <UserPage user={user} tasks={tasks} />
          )}
          </div>
        </div>
      </>
    );
}

export default FrontPage;
