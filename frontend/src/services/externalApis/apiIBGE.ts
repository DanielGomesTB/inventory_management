interface IStates {
  nome: string;
  sigla: string;
}

interface IResponse extends IStates {
  id: number;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
}

export async function getStatesFromIBGE(): Promise<IStates[]>{
	try {
		const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
		const result: IResponse[] = await response.json();
		const data = result.map(({ nome, sigla }) => ({ nome, sigla }));
		return data.sort((a, b) => a.sigla.localeCompare(b.sigla));

	} catch (error) {
		console.error(error);
		return [];
	}
}