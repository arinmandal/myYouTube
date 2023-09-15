import menupng from "../Assets/menu.png"
import youtubelogo from "../Assets/youtube.png"
// import searchicon from "../Assets/search.png"
import { FaSistrix, FaMicrophone } from "react-icons/fa6";
import avater from "../Assets/user.png"
import { useDispatch } from "react-redux";
import { toggleNav } from "../ReduxStore/navSlice";
const Header = () => {

  const dispatch = useDispatch();
  const toggleMenuHandle = () => {
    dispatch(toggleNav())
  }
  return (
    <div className="head p-3 grid grid-flow-col place-items-center place-content-between shadow-lg w-full">
      <div className="humb-logo grid-cols-2 flex">
        <img onClick={() => toggleMenuHandle()} className="text-white h-8 cursor-pointer" src={menupng} alt="hamburger-menu" />
        <div className="logo-container flex items-center pl-5">
          <img className="h-8 pr-1" src={youtubelogo} alt="youtubelogo" />
          <h1 className="font-bold text-2xl">YouTube</h1>
        </div>
      </div>
      <div className="search-box flex">
        <input type="text" placeholder="Search" className="grid-cols-8 w-[560px] min-h-[40px] px-5 border-2 rounded-l-full flex justify-center overflow-hidden focus:outline-sky-500 flex-shrink" />
        <button className="bg-[#F0F0F0] rounded-l-0 rounded-r-full px-8 border-s-2 "><FaSistrix /></button>

        <div className="voice flex items-center justify-center mx-5 ">
          <button className="bg-[#F0F0F0] p-3 min-h-[40px] text-center rounded-full">
          <FaMicrophone />
          </button>
        </div>
      </div>
      <div className="avater grid-cols-2 px-9 ">
        <img className="max-h-[32px] w-auto" src={avater} alt="" />
      </div>
    </div>
  )
}

export default Header