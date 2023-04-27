import { useContext } from 'react';
import { VideoContext } from "..";
import { NavLink } from 'react-router-dom';

export const WatchLater = () => {
    const { watchLater } = useContext(VideoContext);
    return (
        <div>
            <h2>This is watch videos later</h2>
            <ul className="videoCard">
                {watchLater.map(({ id, title, description, thumbnail }) => {
                    return (
                        <li key={id} >
                            <img src={thumbnail} alt='thumbnail' />
                            <div className="videoCard_text">

                                <h3>{title}</h3>
                                <p><NavLink to={`/individual/${id}`}>Watch Here</NavLink></p>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}