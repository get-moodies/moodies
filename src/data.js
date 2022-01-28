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
    "id": 28,
    "name": "Action"
    },
    {
    "id": 12,
    "name": "Adventure"
    },
    {
    "id": 16,
    "name": "Animation"
    },
    {
    "id": 35,
    "name": "Comedy"
    },
    {
    "id": 80,
    "name": "Crime"
    },
    {
    "id": 99,
    "name": "Documentary"
    },
    {
    "id": 18,
    "name": "Drama"
    },
    {
    "id": 10751,
    "name": "Family"
    },
    {
    "id": 14,
    "name": "Fantasy"
    },
    {
    "id": 36,
    "name": "History"
    },
    {
    "id": 27,
    "name": "Horror"
    },
    {
    "id": 10402,
    "name": "Music"
    },
    {
    "id": 9648,
    "name": "Mystery"
    },
    {
    "id": 10749,
    "name": "Romance"
    },
    {
    "id": 878,
    "name": "Science Fiction"
    },
    {
    "id": 10770,
    "name": "TV Movie"
    },
    {
    "id": 53,
    "name": "Thriller"
    },
    {
    "id": 10752,
    "name": "War"
    },
    {
    "id": 37,
    "name": "Western"
    }
    ]
const genera = [{
                "id": 28,
                "name": "Action",
                image:horror
                },
                {
                "id": 12,
                "name": "Adventure",
                image:hero
                },
                {
                "id": 16,
                "name": "Animation",
                image:deathstar
                },
                {
                "id": 35,
                "name": "Comedy",
                image:musical
                },
                {
                "id": 80,
                "name": "Crime",
                image:horror
                }
]
const age = [	{name:"oldies",id:'1950',image:oldies},
				{name:"60s",id:'1960',image:nineties},
				{name:"70s",id:'1970',image:nineties},
				{name:"80s",id:'1980',image:musical},
				{name:"90",id:'1990',image:oldies}
]
const regions = [
    {"isoCode": "AT", "name": "Austria"},
    {"isoCode": "BE", "name": "Belgium"},
    {"isoCode": "BG", "name": "Bulgaria"},
    {"isoCode": "HR", "name": "Croatia"},
    {"isoCode": "CY", "name": "Cyprus"},
    {"isoCode": "CZ", "name": "Czech Republic"},
    {"isoCode": "DK", "name": "Denmark"},
    {"isoCode": "EE", "name": "Estonia"},
    {"isoCode": "FI", "name": "Finland"},
    {"isoCode": "FR", "name": "France"},
    {"isoCode": "DE", "name": "Germany"},
    {"isoCode": "GR", "name": "Greece"},
    {"isoCode": "HU", "name": "Hungary"},
    {"isoCode": "IE", "name": "Ireland, Republic of (EIRE)"},
    {"isoCode": "IT", "name": "Italy"},
    {"isoCode": "LV", "name": "Latvia"},
    {"isoCode": "LT", "name": "Lithuania"},
    {"isoCode": "LU", "name": "Luxembourg"},
    {"isoCode": "MT", "name": "Malta"},
    {"isoCode": "NL", "name": "Netherlands"},
    {"isoCode": "PL", "name": "Poland"},
    {"isoCode": "PT", "name": "Portugal"},
    {"isoCode": "RO", "name": "Romania"},
    {"isoCode": "SK", "name": "Slovakia"},
    {"isoCode": "SI", "name": "Slovenia"},
    {"isoCode": "ES", "name": "Spain"},
    {"isoCode": "SE", "name": "Sweden"},
    {"isoCode": "GB", "name": "United Kingdom (Great Britain)"},
  
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
  ]

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





    export {generes,genera,age,regions,providers}
