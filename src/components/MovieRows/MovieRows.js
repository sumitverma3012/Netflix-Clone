import React, {useState, useEffect} from 'react';
import axios from '../../axios';
import {BASE_URL} from "../../utils/constants";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
import './MovieRow.css';

const MovieRows = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    useEffect(() => {
        const fetchMoviesList = async () => {
            try {
                const response = await axios.get(fetchUrl);
                setMovies(response.data.results);
                return response;
            } catch (e) {
                console.log(e);
            }
        }
        fetchMoviesList();
    }, [fetchUrl])

    const handlePictureClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch(error => console.log(error));
        }
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`movieRow__poster ${isLargeRow && "movieRow__posterLarge"}`}
                        src={`${BASE_URL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
                        alt={movie.title}
                        onClick={() => handlePictureClick(movie)}
                    />
                ))}
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            </div>
        </div>
    )
}

export default MovieRows;