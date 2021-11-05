import React from 'react';
import AplicacionCrudTableRow from "./AplicacionCrudTableRow";

const AplicacionCrudTable = ({datos, setDataToEdit, borrarDatos})=>{
    return(
        <div>
            <h3>Campeones de League of Legends</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Región</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.length > 0 ? (
                        datos.map((el) => (
                        <AplicacionCrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} borrarDatos={borrarDatos}
                        />
                    ))
                ) : (
                    <tr>
                        <td colSpan="3">Sin datos</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default AplicacionCrudTable