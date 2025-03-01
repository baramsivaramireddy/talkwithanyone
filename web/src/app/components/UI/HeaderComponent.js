
import LOGO from "./Logo"

import Link from "next/link"
import ProfileComponent from "./ProfileComponent";
const HeaderComponent = () => {

    return (<>


        <div className="flex  justify-between px-5 items-center">

            <div className="flex items-center gap-5  ">
                {/* svg */}
                <div>


                    <LOGO />

                </div>

                {/* name  */}

                <p className="uppercase font-bold font-righteous text-xs md:text-3xl" > Talk with anyone</p>
                <div>

                </div>
            </div>

            {/* sub Navigation */}

            <div className="text-2xl flex items-center  gap-5">
                <Link href={'#features'} className="font-righteous md:text-xl text-sm text-white" > Features</Link>
                {/* <Link href={'#features'} >   About Us </Link>
                <Link href={'#features'} > Blogs</Link> */}

                <ProfileComponent />
            </div>




        </div >
    </>)
}

export default HeaderComponent;