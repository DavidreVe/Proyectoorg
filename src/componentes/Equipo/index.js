import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{

    //Destructuración
    const {colorPrimario,colorSecuendario, titulo,id} = props.datos
    const {Colaboradores,eliminarColaborador, actualizarColor, like} = props
    const obj = {
        backgroundColor:hexToRgba(colorPrimario, 0.6)
    }
 
    const estiloTitulo = {borderColor:colorPrimario}

    return <>
        {  
            Colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <h3 style={estiloTitulo}>{titulo}</h3>
                <input
                
                    type='color'
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) =>{
                        actualizarColor(evento.target.value, id)
                    }}
                
                />
                <div className="Colaboradores">
          
                {
                     Colaboradores.map((colaborador,index) => <Colaborador 
                     datos={colaborador} 
                     key={index} 
                     colorPrimario={colorPrimario}
                     eliminarColaborador={eliminarColaborador}
                     like={like}
                     />)
                     
                }
                </div>
            </section>
        }</>
}

export default Equipo