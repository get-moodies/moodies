export default function MovieList({ movies }) {
	return (
	<>
		<h3 className="mt-6 text-xl text-white font-medium first-letter:text-3xl">Nick's recomendations to you</h3>
		{movies.map((movie)=> <p key={movie.id}>{movie.title}</p> )}
	</>
	)}
