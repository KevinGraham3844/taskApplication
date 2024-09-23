function TaskSortButtons({ setSorted }) {
    return (
      <div className="mt-5 mb-5 flex flex-row justify-between">
        <button
          type="button"
          onClick={() => setSorted('All')}
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-double focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          All Tasks
        </button>
        <button
          type="button"
          onClick={() => setSorted('Complete')}
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-double focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Completed Tasks
        </button>
        <button
          type="button"
          onClick={() => setSorted('Incomplete')}
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-double focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Incomplete Tasks
        </button>
      </div>
    );
}

export default TaskSortButtons;
