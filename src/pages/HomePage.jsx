import { NavLink } from "react-router-dom"

export const HomePage = () => {
    return (
        <div >
            <h1>Welcome To video Library</h1>
            <h2>To Browse all videos, click the below button or go to the videos pages</h2>
            <button> <NavLink className="homePage" to="/videos" >Explore Videos</NavLink>  </button>
        </div>
    )
}