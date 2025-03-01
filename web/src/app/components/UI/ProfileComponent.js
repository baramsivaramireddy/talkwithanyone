
'use client'
import { useEffect, useState } from "react";
const { useUser } = require("../shared/usercontext")
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogOutComponent from "../Auth/LogoutComponent";

const ProfileComponent = () => {


    const { token } = useUser();


    const [user, setUser] = useState(null);
    useEffect(() => {
        if (!token) {
            return
        }

        setUser(JSON.parse(localStorage.getItem('user')));


    }, [token])


    if (!token) {
        return (<></>);
    }




    return (<>

        <ProfileComponentUI
            user={user}
        />

    </>)
}

const ProfileComponentUI = (props) => {

    const { user } = props;
    return (<>


        <DropDownMenuForProfileComponent >
            <Avatar>
                <AvatarImage src={user?.picture} alt={user?.name} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </DropDownMenuForProfileComponent>


    </>)
}


const DropDownMenuForProfileComponent = ({ children }) => {

    return (<>

        <DropdownMenu>
            <DropdownMenuTrigger>
                {children}
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem> 
                <LogOutComponent />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </>)
}

export default ProfileComponent;