import React,{useState,useEffect} from "react";

const initialForm = {
    nombreCampeon: "",
    regionCampeon: "",
    rolCampeon: "",
    id:null,
};

const AplicacionCrudForm = ({ crearDatos, actualizarDatos, dataToEdit, setDataToEdit }) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {  //actualiza el estado del formulario con los datos a editar
        if (dataToEdit) {
            setForm(dataToEdit); //asigna al formulario los datos del registro a editar
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (!form.nombreCampeon || !form.regionCampeon || !form.rolCampeon) {
            alert("Datos incompletos")
            return;
        }

        if (form.id === null) {
            crearDatos(form);
        } else {
            actualizarDatos(form);
        }
        handleReset();
    };
    

    const handleReset = (e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    };

    return(
        <div>
            <h3>{dataToEdit ? "Editar" : "Agregar"} Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombreCampeon" placeholder="Nombre del Campeón" onChange={handleChange} value={form.nombreCampeon}/>
                <input type="text" name="regionCampeon" placeholder="Región de Origen" onChange={handleChange} value={form.regionCampeon}/>
                <input type="text" name="rolCampeon" placeholder="Rol del Campeón" onChange={handleChange} value={form.rolCampeon}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset}/> 
            </form>
        </div>
    );
};

export default AplicacionCrudForm;