function Task({ task }) {
    return (
      <tr>
        <td>complete</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{task.title}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{task.priority}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{task.category}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{task.dueDate.slice(0, 10)}</td>
      </tr>
    );
}

export default Task;
