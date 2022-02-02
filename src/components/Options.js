import OptionButton from "./Option";

import { generes } from "../data";

export default function Options({ handler, genre }) {
	const nicheGenres = generes.slice(10, 19);
	console.log(nicheGenres);
	return (
		<>
			<h3 className="text-xl text-white font-medium mt-8 mb-5">
				in the mood for something more niche?
			</h3>

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
