import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { VideoContext } from "..";

export const Individual = () => {
    const { videoID } = useParams();
    const { getVideos, getLikedVideo, buttonText, getWatchLaterVideo, watchButton } = useContext(VideoContext);

    const getIndividualVideo = getVideos.find(({ id }) => id === +videoID);

    return (
        <div  >
            <h3 style={{ textAlign: "left", fontSize: "30px" }} > {getIndividualVideo?.title} </h3>

            <div className="videoCard_indi">
                <img src={getIndividualVideo
                    ?.thumbnail} alt="thumbnail" />


                <div className="videoCard_text">
                    <h3> {getIndividualVideo?.title} </h3>
                    <p><NavLink to={getIndividualVideo?.url} >Watch here</NavLink> </p>
                    <b><p> {getIndividualVideo?.description}  </p></b>
                    <p> Duration: {getIndividualVideo?.duration} </p>
                    <button onClick={() => getLikedVideo(getIndividualVideo)} >
                        {buttonText.includes(getIndividualVideo?.id) ? "Liked" : "Like"}
                    </button>
                    <button onClick={() => getWatchLaterVideo(getIndividualVideo)} >
                        {watchButton.includes(getIndividualVideo?.id) ? "Added To Watch later" : "Add To Watch Later"}
                    </button>
                </div>
            </div>
        </div>
    )
}