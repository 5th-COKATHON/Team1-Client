import { Outlet } from 'react-router-dom';
import { Wrapper } from '../styled';

function Root() {
    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    );
}

export default Root;
