import { useContext, useEffect } from 'react';

import MaterialsForm from '../../components/AppMaterials/MaterialsForm';
import MaterialsTable from '../../components/AppMaterials/MaterialsTable';
import Context from '../../context/Context';
import { getAll } from '../../services/api/api';
import { IMaterialApi } from '../../types';
import { Container } from '../../styles/PageContainer';


export default function MaterialsPage() {
	const { materialsData, setMaterialsData } = useContext(Context);

	const getAllMaterials = async () => {
		const response = await getAll('materials');
		setMaterialsData(response as IMaterialApi[]);
	};

	useEffect(() => {
		getAllMaterials();
	}, []);

	return (
		<Container>
			<MaterialsForm />
			<MaterialsTable materialsData={materialsData}/>
		</Container>
	);
}
