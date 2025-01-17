import { Outlet } from 'react-router-dom';
function Root() {
    return (
        <div className='flexbox flexcenter w-screen h-screen'>
            <Outlet />
        </div>
    );
}

export default Root;
