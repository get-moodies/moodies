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
					element={
						<p className="font-medium mt-3 text-white">
							the api fell asleep, try a refresh
						</p>
					}
				/>
				<Route
					path="loading=true"
					element={
						<div>
							<img
								src={face}
								className="Load-spinner mx-auto"
								alt="cage face"
							/>
							<p className="font-medium mt-3 text-white">loading...</p>
						</div>
					}
				/>
				<Route
					path="too-picky=true"
					element={
						<p className="font-medium mt-3 text-white">
							no recomendations found, try selecting less options
						</p>
					}
				/>
				<Route
					path="genre=false"
					element={
						<p className="font-medium mt-3 text-white">please select a genre</p>
					}
				/>
			</Route>
			<Route path="/moodies" element={<Layout />}>
				<Route
					path="suggestions/:sortQuery/:adult_URL/:movieLength/:genreList/:startYear/:endYear/:region"
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
