import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { VideoContext } from "..";

export const Header = () => {
    const { likedVideo, watchLater } = useContext(VideoContext);
    return (
        <div className="navItem" >
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/videos"  >Videos  </NavLink>
            <NavLink to="/liked"  >Liked ({likedVideo.length})</NavLink>
            <NavLink to="/watchLater"  >Watch Later ({watchLater.length}) </NavLink>
        </div>
    )
}