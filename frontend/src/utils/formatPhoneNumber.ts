export default function formatPhoneNumber(phoneNumber: string) {
	const cleaned = phoneNumber.replace(/\D/g, '');
	const match = cleaned.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
	if (match) {
		return '(' + match[1] + ') ' + match[2] + ' ' + match[3] + '-' + match[4];
	}
	return phoneNumber;
}
