import OptionButton from "./Option";

import { generes } from "../data";

export default function Options({ handler, genre }) {
	return (
		<>
			<h3 className="text-xl text-white font-medium mt-8">
				in the mood for something more niche?
			</h3>
			{generes.map((element, index) => (
				<OptionButton
					key={element.id}
					element={element}
					handler={handler}
					index={index}
					isSelected={genre[index]}
				/>
			))}
		</>
	);
}
