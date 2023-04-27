import { useState } from "react"
import "./Campo.css"
const Campo = (props) =>{


  
    const placeholderModificado =`${props.placeholder}...  `
    
    //destructuración
    const { type = "text" } = props
    
    const manejarCambio = (e) =>{
     
        props.actualizarValor(e.target.value)
    }

        <label>{props.titulo}</label>
    return <div className={`campo campo-${type}`}>
        <input placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}
export default Campo