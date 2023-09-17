import menupng from "../Assets/menu.png"
import youtubelogo from "../Assets/youtube.png"
import { FaSistrix, FaMicrophone } from "react-icons/fa6";
import avater from "../Assets/user.png"
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../ReduxStore/navSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../ReduxStore/searchSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/Constant"


const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch();
  // searchCache: {
  //   ["samsung", "samsung s22 ultra", "samsung s23"]
  // }

  // searchQuery: {
  //   ["samsung", "samsung s21fe"]
  // }

  useEffect(() => {
    // Api call
    // make an api call after every key press
    // but if difference between 2 API call  < 200ms
    // decline the API Call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery])
      } else {
        getSuggestion()
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);


  const getSuggestion = async () => {
    // console.log("API CALL" + searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1])

    // updateCache
    dispatch(
      cacheResults({
        // [searchQuery]: json[1],/
        // "iphone": ["1", "2", "3"]
        [searchQuery]: json[1],
      }))
  }
  
  const toggleMenuHandle = () => {
    dispatch(toggleNav())
  }
  return (
    <div className="head p-3 grid grid-flow-col place-items-center place-content-between shadow-lg w-full relative">
      <div className="humb-logo grid-cols-2 flex">
        <img onClick={() => toggleMenuHandle()} className="text-white h-8 cursor-pointer" src={menupng} alt="hamburger-menu" />
        <div className="logo-container flex items-center pl-5">
          <img className="h-8 pr-1" src={youtubelogo} alt="youtubelogo" />
          <h1 className="font-bold text-2xl">YouTube</h1>
        </div>
      </div>
      <div className="search-box flex">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          type="text" placeholder="Search" className="grid-cols-8 w-[560px] min-h-[40px] px-5 border-2 rounded-l-full flex justify-center overflow-hidden focus:outline-sky-500 flex-shrink" />
        <button className="bg-[#F0F0F0] rounded-l-0 rounded-r-full px-8 border-s-2 "><FaSistrix /></button>
        <div className="voice flex items-center justify-center mx-5 ">
          <button className="bg-[#F0F0F0] p-3 min-h-[40px] text-center rounded-full">
            <FaMicrophone />
          </button>
        </div>
        {showSuggestion &&
          <div className="suggestion absolute mt-12 py-2 px-2 rounded-lg bg-white w-[560px] ">
            <ul>
              {suggestion.map((s) => <li key={s} className="flex items-center hover:bg-slate-200"><span className="pr-2"><FaSistrix /></span>{s}</li>)}
            </ul>
          </div>
        }
      </div>

      <div className="avater grid-cols-2 px-9 ">
        <img className="max-h-[32px] w-auto" src={avater} alt="" />
      </div>
    </div>
  )
}

export default Header