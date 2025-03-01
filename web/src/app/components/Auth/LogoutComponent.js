import { googleLogout } from '@react-oauth/google';
import { useUser } from '../shared/usercontext';

const LogOutComponent = () => {


    const { logOut } = useUser()


    return (<>

        <button onClick={() => { googleLogout(); logOut() }}> Log out</button>

    </>)
}

export default LogOutComponent;