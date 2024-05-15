export function addMissingSpaces(lines: string[]): string[] {
	// Find the length of each column
	const columnLengths: number[] = [];
	lines.forEach((line) => {
		const columns = line.split('|').map((col) => col.trim());
		columns.forEach((col, index) => {
			columnLengths[index] = Math.max(columnLengths[index] || 0, col.length);
		});
	});

	// Add missing spaces to align columns
	const result = lines.map((line) => {
		const columns = line.split('|').map((col) => col.trim());
		const alignedColumns = columns.map((col, index) => {
			const spacesToAdd = columnLengths[index] - col.length;
			const leftSpaces = ' '.repeat(Math.ceil(spacesToAdd / 2));
			const rightSpaces = ' '.repeat(Math.floor(spacesToAdd / 2));
			return ` ${leftSpaces}${col}${rightSpaces} `;
		});
		return `${alignedColumns.join('|')}`;
	});

	return result;
}
