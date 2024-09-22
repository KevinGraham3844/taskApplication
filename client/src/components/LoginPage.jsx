import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../reducers/userReducer';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();
        console.log('logging in user');
        dispatch(loginUser(username, password));
        setUsername('');
        setPassword('');
        navigate('/');
    };

    return (
      <div className="flex h-screen flex-col items-center justify-center bg-slate-400">
        <div className="w-full max-w-xs m-auto">
          <form
            className="bg-gradient-to-b from-gray-300 to-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={login}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={({ target }) => setUsername(target.value)}
                id="username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                onChange={({ target }) => setPassword(target.value)}
                id="password"
              />
            </div>
            <div className="flex space-x-4">
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                type="submit"
              >
                Sign in
              </button>
              <button
                type="button"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => navigate('/')}
              >
                Return
              </button>
            </div>

          </form>
        </div>
      </div>

    );
}

export default LoginPage;
