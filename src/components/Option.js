export default function Option({ element, handler, index, isSelected }) {
	return (
		<button
			className={
				!isSelected
					? `
         
            mx-2 my-3
           btn-primary
            `
					: `
            
            mx-2 my-3
          btn-primary-selected
            `
			}
			onClick={() => handler(index + 10)}
		>
			{element.tag}
		</button>
	);
}
