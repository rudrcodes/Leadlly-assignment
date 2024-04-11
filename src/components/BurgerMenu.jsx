import clsx from 'clsx';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io'

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex flex-col justify-center items-center  '>

            <div className="flex justify-between items-center  font-bold gap-4" >
                <button className="text-white border-2 border-[#7DB434] rounded-full px-7 py-2 bg-[#7DB434] hoverClassContactUs tracking-normal  font-[400]">
                    CONTACT US
                </button>
                <button
                    onClick={
                        () => {
                            setOpen(!open)
                        }
                    }

                >
                    <IoMdMenu size={24} />
                </button>
            </div>


            <div className={clsx('absolute top-[72px] bg-white text-gray-600 pl-2 pr-3.5  py-3 flex justify-center items-start flex-col gap-2.5 font-medium rounded-md', open ? 'block' : 'hidden')}>
                <button className='hover:text-[#7DB434]'>
                    Contact Sales
                </button>
                <button className='hover:text-[#7DB434]'>
                    Start Free Trial
                </button>
                <button className='hover:text-[#7DB434]'>
                    Contact Sales
                </button>
                <button className='hover:text-[#7DB434]'>
                    Login to your store
                </button>
            </div>
        </div >
    )
}

export const RightMenu = () => {
    return (
        <div className="flex justify-between items-center  font-bold gap-4">
            <BurgerMenu />
        </div>

    )
}

export default BurgerMenu