import React from "react";
// Routing
import requests from "../routing/requests";
// Components
import NavBar from "../components/NavBar/NavBar";
import Row from "../components/Row/Row";
import Banner from "../components/Banner/Banner";
import './HomeScreen.css';

export default function HomeScreen() {
	return (
		<div className="homeScreen">
			<NavBar />
			<Banner fetchUrl={requests.fetchNetflixOriginals} />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row
				title="Romance Movies"
				fetchUrl={requests.fetchRomanceMovies}
			/>
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}
