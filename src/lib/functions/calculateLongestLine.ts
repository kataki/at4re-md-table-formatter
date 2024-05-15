type Props = {
	lines: string[];
};

export function calculateLongestLine({ lines }: Props) {
	let lognestLine = '';
	for (const line of lines) {
		if (!line.includes('---')) {
			const _line = line.replace(/\s+/g, ' ');
			if (_line.length > lognestLine.length) {
				lognestLine = _line;
			}
		}
	}
	return lognestLine;
}
