import{useState} from "react"
import "./MiOrg.css"
const MiOrg = (props) =>{

    // estado - hooks
    //useState
    //useState()
    // const [nombre de la variable, funcion que actualiza] = useState(valor inicial)
   console.log(props)
    //const [mostrar, actualizarMostrar] = useState(true)

    //const manejarClick = () =>{
        //console.log("Mostrar/Ocultar elemento", !mostrar)
        //actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/agregar.png" alt="Agregar" onClick={props.cambiarMostrar}/>
    </section>
}
export default MiOrg