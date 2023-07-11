export default function formatTitle(str: string, type: 'capitalize' | 'title') {
	if (type === 'capitalize') {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
		
	} else if (type === 'title') {
		const words = str.toLowerCase().split(' ');
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		}
		return words.join(' ');
	}
}