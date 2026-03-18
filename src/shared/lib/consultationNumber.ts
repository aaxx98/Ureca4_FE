interface FormatConsultationNumberParams {
	consultId?: number | null;
	date?: string | null;
}

function extractYear(date?: string | null) {
	if (!date) return null;

	const matchedYear = date.match(/^(\d{4})-/)?.[1];
	if (matchedYear) return matchedYear;

	const parsed = new Date(date);
	if (Number.isNaN(parsed.getTime())) return null;

	return String(parsed.getFullYear());
}

export function formatConsultationNumber({
	consultId,
	date,
}: FormatConsultationNumberParams) {
	if (consultId == null) return "–";

	const year = extractYear(date);
	if (!year) return `#${consultId}`;

	return `#CS-${year}-${String(consultId).padStart(6, "0")}`;
}
