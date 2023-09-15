import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../ReduxStore/navSlice"
import { useSearchParams } from "react-router-dom"

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  return (
    <div className="">
      <iframe className="rounded-lg mx-4 mt-4" width="1000" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage