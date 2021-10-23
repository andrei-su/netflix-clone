import React, { useEffect, useState } from 'react'
// Config
import { IMAGE_BASE_URL } from '../../config'
// Routing
import axios from '../../routing/axios'
// Styles
import './Row.css'
// Trailer
import YouTube from 'react-youtube'
// Youtube search
import ytSearch from 'youtube-search'

export default function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerId, setTrailerId] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    var yOpts = {
      maxResults: 2,
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
    };

    // ---!!! Use another API client for making requests !!!---
    // ---!!! The current one is inefficient and uses all YouTube API quotas !!!---
    const handleClick = (movie) => {
        if (trailerId) {
            setTrailerId("");
        } else {
            console.log("Movie");
            console.log(movie);
            ytSearch(
              movie.name
                ? movie.name === "Lucifer"
                  ? movie.name
                  : movie.name + " netflix"
                : movie.title + " trailer",
              yOpts,
              (error, result) => {
                console.log(result)
                if (error) console.log(error)
                setTrailerId(result[0].kind === "youtube#channel" ? result[1].id : result[0].id)
              }
          )
        }
    }
    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${IMAGE_BASE_URL}${isLargeRow
                            ? movie.poster_path
                            : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
            {trailerId && <YouTube videoId={trailerId} opts={opts} />}
        </div>
    )
}
