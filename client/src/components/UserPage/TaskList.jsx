import Task from './Task';

function TaskList({ tasks }) {
    console.log(tasks);
    return (
      <div className="flex flex-col mt-20">
        <div className="-m-1.5 min-w-full inline-block align-middle">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Completed</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Tasks</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Priority</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Category</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-black-500 uppercase dark:text-neutral-500">Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {tasks.map(task => (
                    <Task
                      key={task.id}
                      task={task}
                    />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TaskList;
