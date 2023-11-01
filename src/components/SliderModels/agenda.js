import React from "react";
import Contacto from "./contact";
import infoMascota from "./InfoMascota";

const Agenda = () =>{
    const mascota = infoMascota();
    return (
        <div>
            <div className="agenda">
                <Contacto nombre={mascota[0].title}/>
            </div>
        </div>
    )
}

export default Agenda;