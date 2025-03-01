'use client'
import SignUPAndINComponent from "../components/Auth/signUPAndInComponent";

import HeaderComponent from "@/app/components/UI/HeaderComponent"
import BackGroundImageComponent from "../components/UI/BackgroundImage";


import {UserProvider} from "@/app/components/shared/usercontext"
const HomepageComponent = () => {



    return (<>

        <div className="bg-[#C31F1F] h-screen py-1">

            <HeaderComponent />

            <BackGroundImageComponent >

                <div className="md:grid md:grid-cols-6  flex flex-col md:gap-5 gap-10  justify-center items-center h-screen" >
                    <div className=" col-span-4">
                        <ShortAboutUs />
                    </div>

                    <div className="">
                        <SignUPAndINComponent />
                    </div>
                </div>
            </BackGroundImageComponent>

        </div>

    </>)
}



export default function HomePage() {

    return (<>

        <UserProvider>
            <HomepageComponent/>
        </UserProvider>

    </>)
}
const ShortAboutUs = () => {

    return (<>
        <div className=" indent-2 md:indent-5">
            <p className="text-white text-2xl font-bold md:text-7xl md:mb-12 font-figmaHand"> Talk. Connect.Feel at Peace</p>

            <div className="md:indent-36 indent-10">
                <p className="text-white md:text-5xl  font-figmaHand ">
                    A safe space to talk
                </p>
                <p className="text-white md:text-5xl  font-figmaHand ">
                    with real people worldwide ,
                </p>
                <p className="text-white md:text-5xl  font-figmaHand ">
                    anonymously or openly,
                </p>
                <p className="text-white md:text-5xl font-figmaHand  ">
                    in your preferred language.
                </p>
            </div>
        </div>
    </>)
}

const FeaturesComponent = () => {


    const features = [

        {label:'Talk with anyone' , featureCompleted:false},
        {label:'stay anonymous' , featureCompleted:false},
        {label:'45 mins daily limit' ,featureCompleted:false},
        {label:'Live map' ,featureCompleted:false}
    ]
    return (<>
        <div id="features" className="h-screen">


            <div>

                
            </div>
        </div>
    </>)
}