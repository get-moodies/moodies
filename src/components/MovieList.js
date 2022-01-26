export default function MovieList({ movies }) {
	return movies.map(({ title }) => (
		<div>
			<div>{title}</div>
		</div>
	));
}
