/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Select, Field, Label } from '@headlessui/react';
import Datepicker from 'react-tailwindcss-datepicker';
import { newTask } from '../reducers/tasksReducer';

function TaskCreationPage({ visible, setVisibility }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');
    const [category, setCategory] = useState('Work');
    const [dueDate, setDueDate] = useState({
        startDate: null,
        endDate: null,
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!visible) return null;

    const submitTask = () => {
      dispatch(newTask({
        title: title,
        description: description,
        priority: priority,
        category: category,
        dueDate: dueDate.startDate,
      }));
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('');
      setCategory('');
      setVisibility(false);
      navigate('/');
    };

    const cancelForm = () => {
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('');
        setCategory('');
        setVisibility(false);
    };

    console.log(title, description, priority, category, dueDate.startDate);

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
                onChange={({ target }) => setTitle(target.value)}
                id="title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <input
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
                useRange={false}
                asSingle={true}
                value={dueDate}
                onChange={newValue => setDueDate(newValue)}
              />

              <div className="flex space-x-4 mt-7">
                <button
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  type="submit"
                >
                  Add Task
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

export default TaskCreationPage;
