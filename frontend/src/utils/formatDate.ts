export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleDateString('pt-BR', options);
}
