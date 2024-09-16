/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-trailing-spaces */
import { useState } from 'react';
import TaskCreationPage from './TaskCreationPage';
import TaskHeaderButtons from './TaskHeaderButtons';

function UserPage({ user, tasks }) {
    const [visible, setVisibility] = useState(false);

    const date = new Date();

    console.log(user, tasks);
    return (
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 h-screen">
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="ml-5 mt-6 text-2xl text-orange-500 text-shadow font-mono outline-4">
              Welcome {user.name}
            </h1>
            <h2 className="mr-5 mt-7 text-2xl text-orange-500 text-shadow">
              {date.toDateString()}
            </h2>
          </div>
          <div>
            <TaskHeaderButtons setVisibility={setVisibility} />
          </div>
        </div>
        <div>
          <TaskCreationPage visible={visible} setVisibility={setVisibility} />
        </div>
      </div>

    );
}

export default UserPage;
