import { useState } from 'react';
import TaskCreationPage from './TaskCreationPage';
import TaskHeaderButtons from './TaskHeaderButtons';
import TaskList from './TaskList';
import TaskSortButtons from './TaskSortButtons';
import TaskFooterButtons from './TaskFooterButtons';

function UserPage({ user, tasks }) {
    const [visible, setVisibility] = useState(false);
    const [sorted, setSorted] = useState('All');

    const date = new Date();

    const nonCompletedTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    console.log(user, tasks);
    return (
      <div>
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
            <div className="flex flex-row justify-between w-full">
              <div>
                <TaskSortButtons setSorted={setSorted} />
              </div>
              <div className="mt-9 ml-20 text-xl text-shadow">
                {`${nonCompletedTasks.length} Tasks Remaining`}
              </div>

            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-8 border-orange-500" />
            </div>
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
        <div className="flex py-5 items-center">
          <div className="flex-grow border-t border-8 border-orange-500" />
        </div>
        <div>
          <TaskFooterButtons tasks={tasks} />
        </div>
      </div>

    );
}

export default UserPage;
