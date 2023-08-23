export function formatDate(inputDate) {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const date = new Date(inputDate);
	const day = date.getUTCDate();
	const month = months[date.getUTCMonth()];
	const year = date.getUTCFullYear();

	return `${month} ${year}`;
}
