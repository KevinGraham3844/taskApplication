import { useEffect } from 'react';
import LoggedOutFront from './LoggedOutFront';
import { useSelector, useDispatch } from 'react-redux';
import { retainUser } from '../reducers/userReducer';
import UserPage from './UserPage';

const FrontPage = ({ navigate }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    console.log(user)
    useEffect(() => {
        console.log('dispatch');
        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            console.log(user)
            dispatch(retainUser(user));
        }
    }, [dispatch]);

    return (
        <>
            {!user && (
                <LoggedOutFront navigate={navigate}/>
            )}
            {user && (
                <UserPage />
            )}
        </>
    )
}

export default FrontPage;