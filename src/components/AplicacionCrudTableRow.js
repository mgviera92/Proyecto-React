import React from "react";

const AplicacionCrudTableRow = ({el, setDataToEdit, borrarDatos})=>{
    let { nombreCampeon, regionCampeon, rolCampeon, id } = el;
        return(
             <tr>
                <td>{nombreCampeon}</td>
                <td>{regionCampeon}</td>
                <td>{rolCampeon}</td>
                <td>
                    <button onClick={() => setDataToEdit(el)}>Editar</button>
                    <button onClick={() => borrarDatos(id)}>Eliminar</button>
                </td>
            </tr>
    );
};

export default AplicacionCrudTableRow