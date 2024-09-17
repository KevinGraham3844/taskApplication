import { useState } from 'react';
import TaskCreationPage from './TaskCreationPage';
import TaskHeaderButtons from './TaskHeaderButtons';
import TaskList from './TaskList';
import TaskSortButtons from './TaskSortButtons';

function UserPage({ user, tasks }) {
    const [visible, setVisibility] = useState(false);
    const [sorted, setSorted] = useState('All');

    const date = new Date();

    const nonCompletedTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    console.log(user, tasks);
    return (
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 h-screen">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="ml-5 mt-6 text-2xl text-orange-500 text-shadow font-mono outline-4">
              Welcome
              {' '}
              {user.name}
            </h1>
            <h2 className="mr-5 mt-7 text-2xl text-orange-500 text-shadow">
              {date.toDateString()}
            </h2>
          </div>
          <div>
            <TaskHeaderButtons setVisibility={setVisibility} />
            <TaskSortButtons setSorted={setSorted} />
            {sorted === 'All' && (
              <TaskList tasks={tasks} />
            )}
            {sorted === 'Complete' && (
            <TaskList tasks={completedTasks} />
            )}
            {sorted === 'Incomplete' && (
            <TaskList tasks={nonCompletedTasks} />
            )}
          </div>
        </div>
        <div>
          <TaskCreationPage visible={visible} setVisibility={setVisibility} />
        </div>
      </div>

    );
}

export default UserPage;
