import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { useNavigate } from "react-router-dom"
import { privateRoutes } from "models/routes";
import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { feedbackUser as AlertSuccess } from "utilities/alerts/feedbackUser.util";

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
        {name: 'Categoria 8', createdAt: '25/05/2015'},
        {name: 'Categoria 9', createdAt: '21/03/2020'},
        {name: 'Categoria 10', createdAt: '09/01/2021'},
    ];
    const tHead = ['#', 'Nombre', 'Creado', 'Acciones'];
    const myTableData = {name: 'name', createdAt: 'createdAt'}

    const handleDelete = async (id) => {
        const response = await AlertWarning('¿Estas segura/o que deseas eliminar?');
        if(response) await AlertSuccess('center', 'success', 'Operación éxitosa');
    }
    const toEdit = (id) => {
        navigate(`edit/${id}`);
    }
    return(
        <>
        <div className=" mt-2 d-flex col col-12">
        <CustomTitle title="Categorías" />
            </div>
            <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
              <BackTo
                wrapLink="col col-10 col-sm-5 my-2 me-1"
                text="Ir dashboard"
                to={"/" + privateRoutes.BACKOFFICE + "dashboard"}
              />
              <BackTo
                wrapLink="col col-10 col-sm-5 my-2"
                text="Crear Categoría"
                to={"/" + privateRoutes.BACKOFFICE + privateRoutes.CATEGORIESCREATE}
                color="success"
                background="success"
                icon={addIcon}
              />
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