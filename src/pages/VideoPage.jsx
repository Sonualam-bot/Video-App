import { useContext } from "react";
import { VideoContext } from "..";
import { NavLink } from "react-router-dom";

export const VideoPage = () => {
    const { getVideos, getLikedVideo, buttonText, getWatchLaterVideo, watchButton } = useContext(VideoContext);
    return (
        <div  >
            <h2>This is All  Videos page </h2>
            <ul className="videoCard">  {getVideos.map((data) => {
                const { id, title, description, url, thumbnail, duration } = data;
                return (
                    <li key={id} >
                        <img src={thumbnail} alt={thumbnail} />
                        <div className="videoCard_text">
                            <h3>{title} </h3>
                            {/* <p>{description} </p> */}
                            <p> <NavLink to={`/individual/${id}`}  >Watch here</NavLink></p>
                            <button onClick={() => getLikedVideo(data)} >
                                {buttonText.includes(id) ? "Liked" : "Like"}
                            </button>
                            <button onClick={() => getWatchLaterVideo(data)} >
                                {watchButton.includes(id) ? "Added To Watch later" : "Add To Watch Later"}
                            </button>
                        </div>
                    </li>
                )
            })} </ul>
        </div>
    )
}