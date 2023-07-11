import { useContext, useEffect } from 'react';

import MaterialsForm from '../../components/AppMaterials/MaterialsForm';
import MaterialsTable from '../../components/AppMaterials/MaterialsTable';
import Context from '../../context/Context';
import { getAll } from '../../services/api/api';
import { IMaterialApi } from '../../types';
import { Container } from '../../styles/PageContainer';


export default function MaterialsPage() {
	const { setMaterialsData } = useContext(Context);

	const fetchApi = async () => {
		const response = await getAll('materials');
		setMaterialsData(response as IMaterialApi[]);
	};

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<Container>
			<MaterialsForm fetchApi={fetchApi} />
			<MaterialsTable fetchApi={fetchApi} />
		</Container>
	);
}
