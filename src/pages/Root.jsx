import { Outlet } from 'react-router-dom';
import { Wrapper } from '../styles/styled';
function Root() {
    return (
        <div className=' flexbox w-screen h-screen'>
            <Outlet />
        </div>
    );
}

export default Root;
