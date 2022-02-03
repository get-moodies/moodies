import OptionButton from "./Option";

import { generes } from "../data";

export default function Options({ handler, genre }) {
	const nicheGenres = generes.slice(10, 19);
	console.log(nicheGenres);
	return (
		<>
			{nicheGenres.map((element, index) => (
				<OptionButton
					key={element.id}
					element={element}
					handler={handler}
					index={index}
					isSelected={genre[index + 10]}
				/>
			))}
		</>
	);
}
