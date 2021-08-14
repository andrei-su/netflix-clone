import React, { useEffect, useState } from 'react'
// Config
import { IMAGE_BASE_URL } from '../../config'
// Routing
import axios from '../../routing/axios'
// Styles
import './Banner.css'

export default function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        }
        fetchData()
    }, [fetchUrl])

    // Optional funciton for truncating
    //  the description if it is too long
    // more than X characters
    function truncate(str, n) {
        return str?.length > n
            ? str.substr(0, n - 1) + "..."
            : str;
    }


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    ${IMAGE_BASE_URL}${movie?.backdrop_path}
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 500)}
                </h1>
            </div>
            <div className="banner_fadeBottom" />
        </header>
    )
}
