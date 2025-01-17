import { Outlet } from 'react-router-dom';
import { Wrapper } from '../styles/styled';
function Root() {
    return (
        <Wrapper>
            <Outlet />
            <div className=' text-9xl'> 123 </div>
        </Wrapper>
    );
}

export default Root;
