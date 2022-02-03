import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Suggestions from "./routes/Suggestions";
import Layout from "./routes/Layout";
import Error from "./routes/Error";

import face from "./images/face.png";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route
					path="error=true"
					element={<div>the api fell asleep, try a refresh</div>}
				/>
				<Route
					path="loading=true"
					element={
						<div>
							<img src={face} className="Load-spinner " alt="cage face" />
							<p>loading...</p>
						</div>
					}
				/>
				<Route
					path="too-picky=true"
					element={
						<div>
							Nick found no recomendations for you! Try to be less picky?
						</div>
					}
				/>
				<Route path="genre=false" element={<div>Please select a genre!</div>} />
			</Route>
			<Route path="/moodies" element={<Layout />}>
				<Route
					path="suggestions/:adult_URL/:genreList/:startYear/:endYear/:region/"
					element={<Suggestions />}
				>
					<Route path=":providerList" element={<Suggestions />} />
					<Route path="" element={<Suggestions />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Route>
			<Route path="*" element={<Error />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
