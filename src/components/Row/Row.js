import React, { useEffect, useState } from 'react';
// Config
import { IMAGE_BASE_URL } from '../../config';
// Routing
import axios from '../../routing/axios';
// Styles
import './Row.css'

export default function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${IMAGE_BASE_URL}${isLargeRow
                            ? movie.poster_path
                            : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
        </div>
    )
}
