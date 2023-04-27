import { fakeFetch } from "../api/fakeFetch";


import { createContext, useState, useEffect } from "react";
export const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
    const [getVideos, setGetVideos] = useState([]);
    const [likedVideo, setLikedVideo] = useState([]);
    const [buttonText, setButtonText] = useState([]);
    const [watchLater, setWatchLater] = useState([]);
    const [watchButton, setWatchButton] = useState([]);

    const getVideosArr = async () => {
        try {
            const { status, data: { videos } } = await fakeFetch("https://example.com/api/videos");
            if (status === 200) {
                setGetVideos(videos)

            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getVideosArr()
    }, [])


    const getLikedVideo = (video) => {
        const checkVideo = likedVideo.find(({ id }) => id === video.id)
        if (!checkVideo) {
            setLikedVideo((likedVideo) => [...likedVideo, video]);
            setButtonText((buttonText) => [...buttonText, video.id])
        }
    }

    const getWatchLaterVideo = (video) => {
        const checkVideo = watchLater.find(({ id }) => id === video.id);
        if (!checkVideo) {
            setWatchLater((watchLater) => [...watchLater, video]);
            setWatchButton((watchButton) => [...watchButton, video.id])
        }
    }

    return (
        <div>
            <VideoContext.Provider value={{ getVideos, getLikedVideo, likedVideo, buttonText, getWatchLaterVideo, watchLater, watchButton }} >
                {children}
            </VideoContext.Provider>
        </div>
    )
}