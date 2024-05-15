import { addMissingSpaces } from './addMissingSpaces';
import { fillHeaderLine } from './fillHeaderLine';
import { formatTableRows } from './formatTableRows';

type Props = {
	tableText: string;
};

export function formatTable({ tableText }: Props) {
	let formattedTable: string[] = [];

	const lines = tableText.split('\n').map((line) => line.trim());

	if (lines.length < 1) {
		formattedTable = ['Invalid table format'];
		return;
	}

	formattedTable = formatTableRows({ lines });
	formattedTable = addMissingSpaces(formattedTable);
	formattedTable = fillHeaderLine(formattedTable);

	return formattedTable.join('\n');
}
