

const BackGroundImageComponent = ({ children }) => {

    return (<>

        <div className="relative h-full w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(/background2.jpg)`, opacity: 0.45 }}
            ></div>

            {/* Content (Ensuring it appears above the background) */}
            <div className="relative z-10">{children}</div>
        </div>
    </>)
}

export default BackGroundImageComponent;