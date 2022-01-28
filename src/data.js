import horror from "./images/horror.png";
import scifi from "./images/scifi.png";
import western from "./images/western.png";
import vhs from "./images/90s.png";
import nineties from "./images/90s2.jpeg";
import oldies from "./images/oldies2.jpeg";
import deathstar from "./images/DeathStar.png";
import hero from "./images/hero.png";
import musical from "./images/musical.png";

const generes = [
	{
		id: 28,
		name: "Action",
	},
	{
		id: 12,
		name: "Adventure",
	},
	{
		id: 16,
		name: "Animation",
	},
	{
		id: 35,
		name: "Comedy",
	},
	{
		id: 80,
		name: "Crime",
	},
	{
		id: 99,
		name: "Documentary",
	},
	{
		id: 18,
		name: "Drama",
	},
	{
		id: 10751,
		name: "Family",
	},
	{
		id: 14,
		name: "Fantasy",
	},
	{
		id: 36,
		name: "History",
	},
	{
		id: 27,
		name: "Horror",
	},
	{
		id: 10402,
		name: "Music",
	},
	{
		id: 9648,
		name: "Mystery",
	},
	{
		id: 10749,
		name: "Romance",
	},
	{
		id: 878,
		name: "Science Fiction",
	},
	{
		id: 10770,
		name: "TV Movie",
	},
	{
		id: 53,
		name: "Thriller",
	},
	{
		id: 10752,
		name: "War",
	},
	{
		id: 37,
		name: "Western",
	},
];
const genera = [
	{
		id: 28,
		name: "Action",
		image: horror,
	},
	{
		id: 12,
		name: "Adventure",
		image: hero,
	},
	{
		id: 16,
		name: "Animation",
		image: deathstar,
	},
	{
		id: 35,
		name: "Comedy",
		image: musical,
	},
	{
		id: 80,
		name: "Crime",
		image: horror,
	},
];
const age = [
	{ name: "oldies", id: "1950", image: oldies },
	{ name: "60s", id: "1960", image: nineties },
	{ name: "70s", id: "1970", image: nineties },
	{ name: "80s", id: "1980", image: musical },
	{ name: "90", id: "1990", image: oldies },
];

const providers = [
	{
		display_priority: 0,
		logo_path: "/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg",
		provider_name: "Netflix",
		provider_id: 8,
	},
	{
		display_priority: 1,
		logo_path: "/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg",
		provider_name: "Disney Plus",
		provider_id: 337,
	},
	{
		display_priority: 1,
		logo_path: "/68MNrwlkpF7WnmNPXLah69CR5cb.jpg",
		provider_name: "Amazon Prime Video",
		provider_id: 9,
	},
];

export { generes, genera, age, providers };
