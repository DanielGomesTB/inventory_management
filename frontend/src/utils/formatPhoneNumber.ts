export default function formatPhoneNumber(phoneNumber: string) {
	const cleaned = phoneNumber.replace(/\D/g, '');
	let phone = cleaned;
	if (cleaned.length === 11) {
		const match = cleaned.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
		if (match) {
			phone =  '(' + match[1] + ') ' + match[2] + ' ' + match[3] + '-' + match[4];
		}
	} else if (cleaned.length === 10) {
		const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
		if (match) {
			phone =  '(' + match[1] + ') ' + match[2] + '-' + match[3];
		}
	}

	return phone;
}