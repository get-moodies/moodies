import horror from "./images/horror.png";
import scifi from "./images/scifi.png";
import western from "./images/western.png";
import vhs from "./images/90s.png";
import nineties from "./images/90s2.jpeg";
import oldies from "./images/oldies2.jpeg";
import deathstar from "./images/DeathStar.png";
import hero from "./images/hero.png";
import musical from "./images/musical.png";

import cuphead from "./images/cuphead_edit.jpg";
import explosion from "./images/explosion_edit.jpg";
import fear from "./images/fear_edit.jpg";
import forest from "./images/forest_edit.jpg";
import gonegirl from "./images/gonegirl_edit.jpg";
import lambs from "./images/lambs_edit.jpg";
import mary from "./images/mary_edit.png";
import noface from "./images/noface_edit4.jpg";
import mountain from "./images/mountain_edit.jpg";
import rafiki from "./images/rafiki_edit.jpg";
import spaceship from "./images/spaceship_edit.jpg";

import metaverse from "./images/metaverse3_edit.jpg";
import modern from "./images/modern_edit.jpg";
import ninetiespattern from "./images/nineties_edit.jpg";
import phone from "./images/phone_edit.jpg";
import wallpaper from "./images/wallpaper_edit.png";

import metaverseBubble from "./images/metaverse_bubble1.jpg";
import modernBubble from "./images/modern_bubble2.jpg";
import ninetiespatternBubble from "./images/nineties_bubble.jpg";
import phoneBubble from "./images/phone_bubble2.jpg";
import wallpaperBubble from "./images/wallpaper_bubble.png";

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
		id: 18,
		name: "Drama",
	},
	{
		id: 14,
		name: "Fantasy",
	},
	{
		id: 27,
		name: "Horror",
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
		id: 53,
		name: "Thriller",
	},
	{
		id: 80,
		name: "Crime",
		tag: "gangs and heists",
	},
	{
		id: 99,
		name: "Documentary",
		tag: "teach me something",
	},
	{
		id: 10751,
		name: "Family",
		tag: "fun for the family",
	},

	{
		id: 36,
		name: "History",
		tag: "history repeating",
	},

	{
		id: 10402,
		name: "Music",
		tag: "harmonies and melodies",
	},
	{
		id: 9648,
		name: "Mystery",
		tag: "murder mysteries",
	},

	{
		id: 10770,
		name: "TV Movie",
		tag: "made for tv",
	},

	{
		id: 10752,
		name: "War",
		tag: "war movies",
	},
	{
		id: 37,
		name: "Western",
		tag: "cowboys and cowgirls",
	},
];
const genresIcons = [
	{
		id: 28,
		name: "Action",
		mood: "guns and explosions",
		image: explosion,
	},
	{
		id: 12,
		name: "Adventure",
		mood: "excitement and adventure",
		image: mountain,
	},
	{
		id: 16,
		name: "Animation",
		mood: "cartoons and animation",
		image: noface,
	},
	{
		id: 35,
		name: "Comedy",
		mood: "a good laugh",
		image: mary,
	},
	{
		id: 18,
		name: "Drama",
		mood: "tension and drama",
		image: gonegirl,
	},
	{
		id: 14,
		name: "Fantasy",
		mood: "magic and escapism",
		image: forest,
	},
	{
		id: 27,
		name: "Horror",
		mood: "nightmares and terror",
		image: fear,
	},
	{
		id: 10749,
		name: "Romance",
		mood: "falling in love",
		image: rafiki,
	},
	{
		id: 878,
		name: "Science Fiction",
		mood: "space and robots",
		image: spaceship,
	},

	{
		id: 53,
		name: "Thriller",
		mood: "thrills and chills",
		image: lambs,
	},
];

const age = [
	{
		name: "vintage",
		id: "1960",
		endYear: "1979",
		image: wallpaper,
		bubble: wallpaperBubble,
	},
	{
		name: "retro",
		id: "1980",
		endYear: "1999",
		image: ninetiespattern,
		bubble: ninetiespatternBubble,
	},
	{
		name: "nostalgic",
		id: "2000",
		endYear: "2009",
		image: phone,
		bubble: phoneBubble,
	},
	{
		name: "modern",
		id: "2010",
		endYear: "2019",
		image: modern,
		bubble: modernBubble,
	},
	{
		name: "new",
		id: "2020",
		endYear: "2022",
		image: metaverse,
		bubble: metaverseBubble,
	},
];
const regions = [
	{ isoCode: "AT", name: "Austria" },
	{ isoCode: "BE", name: "Belgium" },
	{ isoCode: "BG", name: "Bulgaria" },
	{ isoCode: "HR", name: "Croatia" },
	{ isoCode: "CY", name: "Cyprus" },
	{ isoCode: "CZ", name: "Czech Republic" },
	{ isoCode: "DK", name: "Denmark" },
	{ isoCode: "EE", name: "Estonia" },
	{ isoCode: "FI", name: "Finland" },
	{ isoCode: "FR", name: "France" },
	{ isoCode: "DE", name: "Germany" },
	{ isoCode: "GR", name: "Greece" },
	{ isoCode: "HU", name: "Hungary" },
	{ isoCode: "IE", name: "Ireland, Republic of (EIRE)" },
	{ isoCode: "IT", name: "Italy" },
	{ isoCode: "LV", name: "Latvia" },
	{ isoCode: "LT", name: "Lithuania" },
	{ isoCode: "LU", name: "Luxembourg" },
	{ isoCode: "MT", name: "Malta" },
	{ isoCode: "NL", name: "Netherlands" },
	{ isoCode: "PL", name: "Poland" },
	{ isoCode: "PT", name: "Portugal" },
	{ isoCode: "RO", name: "Romania" },
	{ isoCode: "SK", name: "Slovakia" },
	{ isoCode: "SI", name: "Slovenia" },
	{ isoCode: "ES", name: "Spain" },
	{ isoCode: "SE", name: "Sweden" },
	{ isoCode: "GB", name: "United Kingdom (Great Britain)" },

	// {"isoCode": "GF", "name": "French Guiana"},
	// {"isoCode": "GP", "name": "Guadeloupe"},
	// {"isoCode": "MQ", "name": "Martinique"},
	// {"isoCode": "ME", "name": "Montenegro"},
	// {"isoCode": "YT", "name": "Mayotte"},
	// {"isoCode": "RE", "name": "Réunion"},
	// {"isoCode": "MF", "name": "Saint Martin"},

	// {"isoCode": "GI", "name": "Gibraltar"},
	// {"isoCode": "AX", "name": "Åland Islands"},

	// {"isoCode": "PM", "name": "Saint Pierre and Miquelon"},
	// {"isoCode": "GL", "name": "Greenland"},
	// {"isoCode": "BL", "name": "Saint Bartelemey"},
	// {"isoCode": "SX", "name": "Sint Maarten"},
	// {"isoCode": "AW", "name": "Aruba"},
	// {"isoCode": "CW", "name": "Curacao"},
	// {"isoCode": "WF", "name": "Wallis and Futuna"},
	// {"isoCode": "PF", "name": "French Polynesia"},
	// {"isoCode": "NC", "name": "New Caledonia"},
	// {"isoCode": "TF", "name": "French Southern Territories"},
	// {"isoCode": "AI", "name": "Anguilla"},
	// {"isoCode": "BM", "name": "Bermuda"},
	// {"isoCode": "IO", "name": "British Indian Ocean Territory"},
	// {"isoCode": "VG", "name": "Virgin Islands, British"},
	// {"isoCode": "KY", "name": "Cayman Islands"},
	// {"isoCode": "FK", "name": "Falkland Islands (Malvinas)"},
	// {"isoCode": "MS", "name": "Montserrat"},
	// {"isoCode": "PN", "name": "Pitcairn"},
	// {"isoCode": "SH", "name": "Saint Helena"},
	// {"isoCode": "GS", "name": "South Georgia and the South Sandwich Islands"},
	// {"isoCode": "TC", "name": "Turks and Caicos Islands"},

	// {"isoCode": "AD", "name": "Andorra"},
	// {"isoCode": "LI", "name": "Liechtenstein"},
	// {"isoCode": "MC", "name": "Monaco"},
	// {"isoCode": "SM", "name": "San Marino"},
	// {"isoCode": "VA", "name": "Vatican City"},

	// {"isoCode": "JE", "name": "Jersey"},
	// {"isoCode": "GG", "name": "Guernsey"},
	// {"isoCode": "GI", "name": "Gibraltar"}
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

export { generes, genresIcons, age, regions, providers };

// const moviesTemplate = [
// 	{
// 		title: "The Good Movie To Watch",
// 		overview:
// 			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
// 		backdrop_path:
// 			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
// 		poster_path:
// 			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
// 		release_date: "1994 05 26",
// 	},
// 	{
// 		title: "The Good Movie To Watch",
// 		overview:
// 			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
// 		backdrop_path:
// 			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
// 		poster_path:
// 			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
// 		release_date: "1994 05 26",
// 	},
// 	{
// 		title: "The Good Movie To Watch",
// 		overview:
// 			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
// 		backdrop_path:
// 			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
// 		poster_path:
// 			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
// 		release_date: "1994 05 26",
// 	},
// 	{
// 		title: "The Good Movie To Watch",
// 		overview:
// 			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
// 		backdrop_path:
// 			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
// 		poster_path:
// 			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
// 		release_date: "1994 05 26",
// 	},
// 	{
// 		title: "The Good Movie To Watch",
// 		overview:
// 			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
// 		backdrop_path:
// 			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
// 		poster_path:
// 			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
// 		release_date: "1994 05 26",
// 	},
// 	{
// 		title: "The Good Movie To Watch",
// 		overview:
// 			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
// 		backdrop_path:
// 			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
// 		poster_path:
// 			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
// 		release_date: "1994 05 26",
// 	},
// ];
