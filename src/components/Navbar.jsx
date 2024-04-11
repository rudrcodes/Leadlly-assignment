import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RightMenu } from "./BurgerMenu";

const Navbar = () => {
  return (
    <div className="w-full h-20  flex justify-center items-center relative z-[1]">
      <div className="w-[1120px]   px-6 py-1 flex justify-between items-center">
        <img
          className="h-[54px] "
          src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.settings/521c4d7548c284890e000001/594a155440e9fb9e592f2ba9-240x240.png"
        />

        <div className="flex justify-between items-end text-[17px]   font-[400] gap-5 mt-4 mr-6 ">
          <span className="cursor-pointer flex justify-center items-center ">
            Solutions <MdOutlineKeyboardArrowDown />

          </span>
          <span className="cursor-pointer flex justify-center items-center ">
            Develop <MdOutlineKeyboardArrowDown />
          </span>
          <span className="cursor-pointer">
            Examples
          </span>
          <span className="cursor-pointer">
            Pricing
          </span>
          <span className="cursor-pointer flex justify-center items-center ">
            Resources <MdOutlineKeyboardArrowDown />
          </span>
        </div>

        <div className="mt-2 mr-2">
          <RightMenu />
        </div>


      </div>
    </div>
  )
}

export default Navbar