export default function formatDate(dateString: string) {
	const date = new Date(dateString);
	const options = {
		day: '2-digit' as const,
		month: '2-digit' as const,
		year: 'numeric' as const,
		hour: '2-digit' as const,
		minute: '2-digit' as const
	};
	return date.toLocaleDateString('pt-BR', options);
}
