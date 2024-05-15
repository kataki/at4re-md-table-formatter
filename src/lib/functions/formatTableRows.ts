import { THE_SPACE, separator } from '$lib/constant';
import { calculateLongestLine } from './calculateLongestLine';

type Props = {
	lines: string[];
};

export function formatTableRows({ lines }: Props) {
	// Step 1: Find the longest line
	const longestLine = calculateLongestLine({ lines: lines });
	// console.log('🚀 ~ formatTableRows ~ longestLine:', longestLine);

	let newLines = [];
	for (const line of lines) {
		if (line.trim() === '') continue;
		const usedLine = line.trim().replace(/\s+/g, ' ').replaceAll('--', '-').replace('--', '---');

		// Columns
		let _line = '';
		console.log(`usedLine(${usedLine})`);

		const columns = usedLine.split(separator);

		if (columns === undefined) continue;
		columns.pop(); // Remove the last element
		columns.shift(); // Remove the first element
		console.log(`columns(${columns})`);

		for (let i = 0; i < columns.length; i++) {
			console.log(`------------------ ${i} ------------------`);

			const column = columns[i].trim();
			const longColumns = longestLine.split(separator);
			if (longColumns === undefined) continue;
			longColumns.pop(); // Remove the last element
			longColumns.shift(); // Remove the first element

			const longColumn = longColumns[i].trim();
			if (longColumn === undefined) continue;

			console.log(`column(${column})[${column.length}]`);
			console.log(`longColumn(${longColumn})[${longColumn.length}]`);

			let spacesToAdd = longColumn.length - column.length + 1;
			if (spacesToAdd < 0) {
				spacesToAdd = longColumn.length;
			}

			console.log(`spacesToAdd(${spacesToAdd})`);

			_line += column + ' '.repeat(spacesToAdd);

			if (i < columns.length - 1) {
				// check if the last char of _line is not a space then add space else don't add space
				if (isAllowToAddSpacesAtEnd(_line)) {
					_line += `${THE_SPACE}${separator}${THE_SPACE}`;
				} else {
					_line += `${separator} `;
				}
			}
			console.log(`_line(${_line})`);
		}

		if (isAllowToAddSpacesAtEnd(_line)) {
			_line += `${THE_SPACE}${separator}`;
		} else {
			_line += separator;
		}

		if (isAllowToAddSpacesAtStart(_line)) {
			_line = `${separator}${THE_SPACE}` + _line;
		} else {
			_line = separator + _line;
		}

		newLines.push(`${_line}`);
	}

	return newLines;
}

const isAllowToAddSpacesAtEnd = (_line: string) => {
	// Get the last character of _line
	const lastChar = _line[_line.length - 1];

	// Check if the last character is not a space
	return lastChar !== THE_SPACE;
};

const isAllowToAddSpacesAtStart = (_line: string) => {
	return _line[0] !== THE_SPACE && _line[1] !== THE_SPACE;
};
