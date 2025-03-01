
import axios from 'axios';
import jwt from 'jsonwebtoken';
import toast from 'react-hot-toast';
import { useUser } from '../shared/usercontext';


const useAuth = () => {

    const { logIn } = useUser();


    const handleSignUpAndSignIn = async (credential) => {

        try {

            const userDecodedJSON = jwt.decode(credential);


            localStorage.setItem('user', JSON.stringify({ picture: userDecodedJSON.picture, name: userDecodedJSON.name, email: userDecodedJSON.email }));
            if (!userDecodedJSON.email_verified) {
                toast.error(`Please verify your email`);
            }


            let response = await sendCredentialToBackend(credential);

            if (response.status == 200) {

                logIn(response.data.token);

                // set token to storage
            } else if (response.status == 403) {

                toast.error(`${response.data.message}`);
            } else if (response.status == 503) {
                toast.error(`Server is overloaded at the moment`);
            }


        } catch (err) {
            console.warn(`Something went wrong ${err.message}`);
            toast.error(`Sorry our system is down !`)
        }
    }

    return { handleSignUpAndSignIn }
}
export default useAuth;


const sendCredentialToBackend = async (credential) => {

    return axios.post(`${process.env.NEXT_PUBLIC_BACKENDURL}/apis/auth`, { credential }, {
        validateStatus: function (status) {
            return status >= 200 && status < 600; // i want to handle 503 error too
        },
    })
}