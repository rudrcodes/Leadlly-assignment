import Typewriter from 'typewriter-effect';

const Section1 = () => {
    return (
        <div className="h-[83vh]  flex justify-center  items-center relative">
            <div className=" mb-32 mr-20 ">
                <h1 className="text-[42px] font-[700] text-[#202020]">Leading Enterprise </h1>
                <h1 className="text-[42px] font-[700] text-[#202020]">Ecommerce Platform in India</h1>
                <h1 className="text-[22px] font-[700] text-[#202020] flex gap-2 items-center">Build whitelabelled

                    <div className="text-[#7DB434]">

                        <Typewriter
                            options={{
                                strings: ['Multi brand Marketplaces', 'Vertical Marketplaces', 'Multilingual Marketplaces', 'B2C Marketplaces', 'Horizontal Marketplaces', 'B2B2C Marketplace'],
                                autoStart: true,
                                loop: true,
                            }}
                        // onInit={(typewriter) => {
                        //     typewriter.typeString('Hello World!')
                        //         .callFunction(() => {
                        //             console.log('String typed out!');
                        //         })
                        //         .pauseFor(2500)
                        //         .deleteAll()
                        //         .callFunction(() => {
                        //             console.log('All strings were deleted');
                        //         })
                        //         .start();
                        // }}
                        />
                    </div>
                </h1>
                <h1 className="mt-2 text-[23px] font-lighter text-[#202020]">Designed for diverse B2B and B2C business models</h1>
                <button className="text-white mt-7 border-2 border-[#7DB434] rounded-full px-7 py-2 bg-[#7DB434] hoverClassContactUs tracking-wider">
                    SCHEDULE A DEMO
                </button>
            </div>
            <img
                src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657809dbbcebf27febe432cc/ecommerce-banner.png"
                className="h-[555px] w-[384px] mt-2 ml-3"
            />
        </div>
    )
}

export default Section1
