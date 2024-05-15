export function fillHeaderLine(lines: string[]): string[] {
	const linesArray = lines;

	let openingAndClosing = '';
	const newArray = [];
	for (let i = 0; i < linesArray.length; i++) {
		let row = linesArray[i].trim();

		if (linesArray[i].includes('---')) {
			row = row.replaceAll(' ', '-');
			console.log(row);
			openingAndClosing = row;
		}
		newArray.push(row);
	}

	if (!newArray[0].includes('---')) {
		newArray.unshift(openingAndClosing);
	}

	if (!newArray[newArray.length - 1].includes('---')) {
		newArray.push(openingAndClosing);
	}

	return newArray;
}
