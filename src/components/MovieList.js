export default function MovieList({ movies }) {
	return movies.splice(0, 3).map(({ title }) => (
		<div className="m-2">
			<div>{title}</div>
		</div>
	));
}
