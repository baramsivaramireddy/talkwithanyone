
import { GoogleOAuthProvider } from '@react-oauth/google';
const ClientId = process.env.NEXT_PUBLIC_GoogleOAuth_ClientID
import { Toaster } from 'react-hot-toast';
const Providers = ({ children }) => {

    return (<>

        <Toaster />
        <GoogleOAuthProvider clientId={ClientId}>{children}</GoogleOAuthProvider>

    </>)
}

export default Providers;