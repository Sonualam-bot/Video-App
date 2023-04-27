import { useContext } from "react";
import { VideoContext } from "..";
import { NavLink } from "react-router-dom";


export const LikedVideo = () => {
    const { likedVideo } = useContext(VideoContext);
    return (
        <div>
            <h2>This is Liked Video</h2>
            <ul className="videoCard">
                {likedVideo.map((data) => {
                    const { id, title, thumbnail, description, url, duration } = data
                    return (
                        <li key={id} >
                            <img src={thumbnail} alt="thumbnail" />
                            <div className="videoCard_text">
                                <h3>{title} </h3>
                                <p><NavLink to={`/individual/${id}`}>Watch here</NavLink></p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}