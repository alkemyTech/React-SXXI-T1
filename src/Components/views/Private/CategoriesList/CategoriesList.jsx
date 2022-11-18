import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom"
import { privateRoutes } from "models/routes";

export default function CategoriesList(){
    const navigate = useNavigate();
    const CategoriesTest = [
        {name: 'Categoria 1', createdAt: '15/12/2011'},
        {name: 'Categoria 2', createdAt: '10/11/2017'},
        {name: 'Categoria 3', createdAt: '04/05/2013'},
        {name: 'Categoria 4', createdAt: '08/06/2010'},
        {name: 'Categoria 5', createdAt: '20/10/2018'},
        {name: 'Categoria 6', createdAt: '31/12/2011'},
        {name: 'Categoria 7', createdAt: '25/07/2012'},
    ];
    const tHead = ['#', 'Nombre', 'Creado', 'Acciones'];
    const myTableData = {name: 'name', createdAt: 'createdAt'}
    const toCreate = () => {
        navigate(privateRoutes.CREATECATEGORY);
    }
    const handleDelete = (id) => {
        console.log('Borrado: ', id);
    }
    const toEdit = (id) => {
        navigate(`${privateRoutes.EDITCATEGORY}/${id}`);
    }
    return(
        <>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '1rem 0', padding: '0'}}>
            <h1>Categorías</h1>
            <CustomButton 
                text='Nueva Categoría'
                background="success"
                color="success"
                onClick={toCreate}/>
        </div>
        <CustomTable
                tHead={tHead}
                myTableData={myTableData}
                tBody={CategoriesTest}
                handleDelete={handleDelete}
                handleEdit={toEdit}/>
        </>
    )
}