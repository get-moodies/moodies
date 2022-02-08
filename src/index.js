import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter,
	HashRouter,
	Routes,
	Route,
	Link,
} from "react-router-dom";

import App from "./App";
import Suggestions from "./routes/Suggestions";
import Layout from "./routes/Layout";
import Error from "./routes/Error";
import Profile from "./routes/Profile";
import User from "./routes/User";
import Playlists from "./routes/Playlists";

import face from "./images/face.png";
import { ContextProvider } from "./components/ContextProvider";

ReactDOM.render(
	<ContextProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route
						path="error=true"
						element={
							<div className="mt-12">
								<img
									src={face}
									className="Load-spinner mx-auto"
									alt="cage face"
								/>
								<p className="font-medium text-xl mt-9 text-white">
									the api fell asleep, try again
								</p>
								<button
									className="
						mt-9
						w-44
						btn-primary
					"
								>
									<Link to="/">back</Link>
								</button>
							</div>
						}
					/>
					<Route
						path="loading=true"
						element={
							<div className="mt-12">
								<img
									src={face}
									className="Load-spinner mx-auto"
									alt="cage face"
								/>
								<p className="font-medium text-xl mt-9 text-white">
									loading...
								</p>
							</div>
						}
					/>
					<Route
						path="too-picky=true"
						element={
							<div className="mt-12">
								<img
									src={face}
									className="Load-spinner mx-auto"
									alt="cage face"
								/>
								<p className="font-medium text-xl mt-9 text-white">
									no recomendations found, try selecting less options
								</p>
								<button
									className="
								mt-9
								w-44
								btn-primary
							"
								>
									<Link to="/">back</Link>
								</button>
							</div>
						}
					/>
					<Route
						path="genre=false"
						element={
							<div className="mt-12">
								<img
									src={face}
									className="Load-spinner mx-auto"
									alt="cage face"
								/>
								<p className="font-medium text-xl mt-9 text-white">
									please select a mood to see results
								</p>
								<button
									className="
							mt-9
							w-44
							btn-primary
						"
								>
									<Link to="/">back</Link>
								</button>
							</div>
						}
					/>
				</Route>
				<Route path="/moodies" element={<Layout />}>
					<Route
						path="genre=false"
						element={
							<div className="mt-12">
								<img
									src={face}
									className="Load-spinner mx-auto"
									alt="cage face"
								/>
								<p className="font-medium text-xl mt-9 text-white">
									please select a mood to see results
								</p>
								<button
									className="
							mt-9
							w-44
							btn-primary
						"
								>
									<Link to="/">back</Link>
								</button>
							</div>
						}
					/>
					<Route
						path="too-picky=true"
						element={
							<div className="mt-12">
								<img
									src={face}
									className="Load-spinner mx-auto"
									alt="cage face"
								/>
								<p className="font-medium text-xl mt-9 text-white">
									no recomendations found, try selecting less options
								</p>
								<button
									className="
								mt-9
								w-44
								btn-primary
							"
								>
									<Link to="/">back</Link>
								</button>
							</div>
						}
					/>
					<Route
						path="loading=true"
						element={
							<div className="mt-12">
								<img
									src={face}
									className="Load-spinner mx-auto"
									alt="cage face"
								/>
								<p className="font-medium text-xl mt-9 text-white">
									loading...
								</p>
							</div>
						}
					/>
					<Route
						path="suggestions/:sortQuery/:adult_URL/:movieLength/:genreList/:startYear/:endYear/:region"
						element={<Suggestions />}
					>
						<Route path=":providerList" element={<Suggestions />} />
						<Route path="" element={<Suggestions />} />
					</Route>
					<Route path="users/:user" element={<User />} />
					<Route path="profiles/:user" element={<Profile />} />
					<Route path="*" element={<Error />} />
					<Route path="playlists" element={<Playlists />} />

				</Route>
				<Route path="*" element={<Error />} />

			
		</Routes>
	</BrowserRouter>
</ContextProvider>,

	document.getElementById("root")
);
