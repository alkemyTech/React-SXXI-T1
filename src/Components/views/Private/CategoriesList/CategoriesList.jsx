import Table from 'react-bootstrap/Table';

export default function CategoriesList(){
    const CategoriesTest = [
        {name: 'Categoria 1', createdAt: '15/12/2011'},
        {name: 'Categoria 2', createdAt: '10/11/2011'},
        {name: 'Categoria 3', createdAt: '04/05/2011'},
        {name: 'Categoria 4', createdAt: '08/06/2011'},
        {name: 'Categoria 5', createdAt: '20/10/2011'},
        {name: 'Categoria 6', createdAt: '31/12/2011'},
        {name: 'Categoria 7', createdAt: '25/07/2011'},
    ];
    return(
        <>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '1rem 0', padding: '0'}}>
            <h1>Categorías</h1>
            <button style={{backgroundColor: 'blue', borderRadius: '8px'}}>Nueva Categoría</button>
        </div>
        <Table striped bordered hover className='my-3'>
            <thead className='bg-primary text-light'>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Creado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    CategoriesTest?.map((el, index) => 
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{el.name}</td>
                            <td>{el.createdAt}</td>
                            <td>Editar Eliminar</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
        </>
    )
}