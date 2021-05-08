import React, {useState, useEffect} from 'react';
import axios from '../../axios';
import config from '../../requests';
import {BASE_URL} from "../../utils/constants";
import './Banner.css';

const Banner = () => {
    const [movie, setMovie] = useState(undefined);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(config.fetchNetflixOriginals);
                const randomIndex = Math.floor(Math.random() * response.data.results.length - 1);
                setMovie(response.data.results[randomIndex]);
                return response;
            } catch (e) {
                console.log(e);
            }
        }
        fetchMovie();
    }, []);

    const truncate = (inputString, characterLimit) => {
        return inputString?.length > characterLimit ? inputString.substr(0, characterLimit-1) + "..." : inputString;
    }

    return(
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${BASE_URL}${movie?.backdrop_path})`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner__fadeBottom" />
        </header>
    )
}


export default Banner;