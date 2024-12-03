import React from "react";
import style from "./TarjetaPaciente.module.css";

function TarjetaPaciente({ imgPaciente, nombre, edad, sexo }){
    return (
        <article className={style.tarjeta}>
            <img src={imgPaciente} alt={nombre} className={style.img}/>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
            <p>Sexo: {sexo}</p>
        </article>
    )
}
export default TarjetaPaciente