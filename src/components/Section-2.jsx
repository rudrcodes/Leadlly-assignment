
const Section2 = () => {
    return (
        <div className="h-[95vh] w-full flex justify-center  items-center pl-10 pr-10 ">
            {/* <div className="bg-green-100  w-full flex justify-center  items-center h-full px-22 rounded-tl-[100px] gap-1"> */}
            <div className="bg-[#F9F9F9]  w-full flex justify-center  items-center h-full px-22 rounded-tl-[100px] gap-1">

                {/* 2 parts , left & right */}

                <div className="w-[55%] flex justify-center items-center relative  flex-wrap">
                    <div className="w-[70%] flex justify-center items-center gap-5 flex-wrap">
                    {/* <div className="w-[70%] grid grid-cols-3"> */}

                        <div className="flex justify-center items-center flex-col gap-5 flex-wrap">
                            <div className="relative ">
                                <img
                                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e540b3825200ec3e98d4c/logo_1-280x280.png"
                                    className="h-[155px] w-[155px] shadow-xl rounded-2xl"
                                />
                                <img
                                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg"
                                    className="bottom-5 left-16 absolute hidden hover:block"
                                />
                            </div>


                            <div >
                                <img
                                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e550535f17f0f1634a49c/logo_4-280x280.png"
                                    className="h-[155px] w-[155px] shadow-xl rounded-2xl"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-5 flex-wrap">
                            <div >
                                <img
                                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e541f32ee360f4ca90519/logo_2-280x280.png"
                                    className="h-[155px] w-[155px] shadow-xl rounded-2xl"
                                />
                            </div>

                            <div >
                                <img
                                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/652fdc4002b0a2ff20ae7608/logo_7-1-280x280.png"
                                    className="h-[155px] w-[155px] shadow-xl rounded-2xl"
                                />
                            </div>
                            <div >
                                <img
                                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657984e0056572ee3696b063/mystore-280x280.png"
                                    className="h-[155px] w-[155px] shadow-xl rounded-2xl"
                                />
                            </div>


                        </div>
                        <div className="flex justify-center items-center flex-col gap-5 flex-wrap">
                            <div >
                                <img
                                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e5431b0863239a92b8315/logo_3-280x280.png"
                                    className="h-[155px] w-[155px] shadow-xl rounded-2xl"
                                />
                            </div>
                            <div >
                                <img
                                    src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e553491816d9dd9286f0f/logo_6-280x280.png"
                                    className="h-[155px] w-[155px] shadow-xl rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            // Arrow img
                            src="/arrow.png"
                            className="h-[150px] absolute top-[162px] right-[-10px]"
                        />
                    </div>
                </div>
                <div className="flex-1 bg-green-300 flex flex-col gap-2 items-end pr-20 mt-20">
                    <div className="text-[36px] font-[700] text-right">Empowering Brands <br />Across the Globe</div>

                    <p className="text-[18px] font-[500] text-right w-[458px] bg-red-900 ">
                        StoreHippo ecommerce platform builds extraordinary solutions to power brands across 15 countries and 30+ industries. Add your brand to the long list of brands that trust StoreHippo.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Section2