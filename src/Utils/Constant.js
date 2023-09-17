// const API_KEY = "AIzaSyBY8q4KJyiO_MLaQJxwN39Z3XEIKUcprIo"

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+`${process.env.REACT_APP_API_KEY}`
;

export const YOUTUBE_SEARCH_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
