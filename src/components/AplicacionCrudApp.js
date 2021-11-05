import React, {useState} from 'react';
import AplicacionCrudForm from "./AplicacionCrudForm";
import AplicacionCrudTable from "./AplicacionCrudTable";


const inicialDb = [
  {
    id: 1,
    nombreCampeon: "Ornn",
    regionCampeon: "Freljord",
    rolCampeon: "Tanque",
    
  },
  {
    id: 2,
    nombreCampeon: "Viego",
    regionCampeon: "Las islas de las Sombras",
    rolCampeon: "Asesino",

  },
  {
    id: 3,
    nombreCampeon: "Quinn",
    regionCampeon: "Demacia",
    rolCampeon: "Tirador",
    
  },
  {
    id: 4,
    nombreCampeon: "Aatrox",
    regionCampeon: "Runaterra",
    rolCampeon: "Peleador",
    
  },
  {
    id: 5,
    nombreCampeon: "Blitzcrank",
    regionCampeon: "Zaun",
    rolCampeon: "Tanque",
    
  }
];

const AplicacionCrudApp =()=>{

    const [db, setDb] = useState(inicialDb);
    const [dataToEdit, setDataToEdit] = useState(null);
    //si es null, va a ser una insercion, sino es una edicion

    const crearDatos = (datos) => {
      datos.id = Date.now();
      setDb([...db, datos]);
    };

    const actualizarDatos = (datos) => {
      let nuevosDatos = db.map((el) => (el.id === datos.id ? datos : el));
      setDb(nuevosDatos);
    };

    const borrarDatos = (id) => {
      let isDelete = window.confirm(
        `¿Estás seguro de eliminar el campeón con el id "${id}"?`
      );
      
      if (isDelete) {
        let nuevosDatos = db.filter((el) => el.id !== id);
        setDb(nuevosDatos);
      } else {
        return;
      }
    };


    return(
        <div>
            <h2>Aplicacion CRUD</h2>
              <AplicacionCrudForm
                crearDatos={crearDatos}
                actualizarDatos={actualizarDatos}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
              <AplicacionCrudTable
                datos={db}
                setDataToEdit={setDataToEdit}
                borrarDatos={borrarDatos}
              />
        </div>
    );
};


export default AplicacionCrudApp