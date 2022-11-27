import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { feedbackUser as Alert } from "utilities/alerts/feedbackUser.util";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";

export const useCategoryHook = ()=>{
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    
    const tHead = ['#', 'id', 'Nombre', 'Creado', 'Acciones'];
    const myTableData = {id: 'id', name: 'name', createdAt: 'createdAt'}
    
    const handleDelete = async (id) => {
        const find = categories.find(el => id === el.id);
        if(find) {
            const confirm = await AlertWarning(`¿Estas segura/o que deseas eliminar "${find.name}"?`);
            if(confirm){
                const res = await privateService.deleted(URLs.category, id);
                if(res.success) Alert('center', 'success', 'Operación éxitosa');
                else Alert('center', 'error', 'Ha ocurrido un error');
            }
        }
    }
    
    const toEdit = (id) => {
        navigate(`edit/${id}`);
    }

    return{
        categories,
        setCategories,
        handleDelete,
        toEdit,
        tHead,
        myTableData
    }
}