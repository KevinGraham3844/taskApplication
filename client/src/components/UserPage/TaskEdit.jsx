import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Select, Field, Label } from '@headlessui/react';
import { Datepicker } from 'flowbite-react';
import { editTask } from '../../reducers/tasksReducer';

function TaskEdit({ visible, setVisibility, task }) {
    if (!visible) return null;

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [priority, setPriority] = useState(task.priority);
    const [category, setCategory] = useState(task.category);
    const [dueDate, setDueDate] = useState(task.dueDate.split('T')[0]);

    const dispatch = useDispatch();

    const submitTask = (event) => {
      event.preventDefault();
      dispatch(editTask({
        title: title,
        description: description,
        priority: priority,
        category: category,
        dueDate: dueDate,
        id: task.id,
      }));
      setVisibility(false);
    };

    const cancelForm = () => {
        setVisibility(false);
    };

    const handleDatePickerChange = (date) => {
      const newDate = date.toISOString().split('T')[0];
      console.log(newDate);
      setDueDate(newDate);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
        flex justify-center items-center"
      >
        <div className="bg-stone-400 p-2 rounded">
          <form
            onSubmit={submitTask}
            className="bg-gradient-to-b from-gray-300 to-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={title}
                onChange={({ target }) => setTitle(target.value)}
                id="title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                value={description}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={({ target }) => setDescription(target.value)}
                id="title"
              />
            </div>
            <div className="mb-4">
              <Field>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Priority
                </Label>
                <Select name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Select>
              </Field>

            </div>
            <div className="mb-4">
              <Field>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Category
                </Label>
                <Select name="priority" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                  <option value="Study">Study</option>
                </Select>
              </Field>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Due Date
              </label>
              <Datepicker
                inline
                onSelectedDateChanged={handleDatePickerChange}
              />
              <div className="flex space-x-4 mt-7">
                <button
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  type="submit"
                >
                  Edit Task
                </button>
                <button
                  type="button"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  onClick={() => cancelForm()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default TaskEdit;
