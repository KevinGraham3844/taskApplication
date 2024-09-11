import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retainUser } from '../reducers/userReducer';
import UserPage from './UserPage';
import LoggedOutFront from './LoggedOutFront';

function FrontPage({ navigate }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const error = useSelector(state => state.errorNotification);

    console.log(user);
    useEffect(() => {
        console.log('dispatch');
        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if (loggedUserJSON) {
            console.log(JSON.parse(loggedUserJSON));
            dispatch(retainUser(JSON.parse(loggedUserJSON)));
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
        {user && (
        <UserPage />
            )}
      </>
    );
}

export default FrontPage;
