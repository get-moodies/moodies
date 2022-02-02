export default function Option({ element, handler, index, isSelected }) {
	return (
		<button
			className={
				!isSelected
					? `
         
            mx-2 my-5
           btn-primary
            `
					: `
            
            mx-2 my-5
          btn-primary-selected
            `
			}
			onClick={() => handler(index)}
		>
			{element.name}
		</button>
	);
}
