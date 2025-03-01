"use client"
import { GoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';


import useAuth from '@/app/components/Auth/helper'
import { useUser } from '../shared/usercontext';


const SignUPAndINComponent = () => {

    const { token } = useUser();
    const { handleSignUpAndSignIn } = useAuth();

    if (token) {

        return (<></>)
    }
    return (<>
        <GoogleLogin
            onSuccess={credentialResponse => {
                handleSignUpAndSignIn(credentialResponse?.credential);
            }}
            shape="circle"
            onError={() => {
                console.error('Login Failed');
                toast.error('Login failed!');

            }}
        />
    </>)
}

export default SignUPAndINComponent;