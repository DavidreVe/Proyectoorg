import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import './App.css';
import Equipo from './componentes/Equipo';
import Footer from './componentes/footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [Colaboradores, actualizarColaboradores]= useState([{
    id:uuid(),
    equipo: "Front-End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id:uuid(),
    equipo: "Ux-Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:true
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }
  ])

  const [equipos, actualizarEquipos] = useState( [
    {
      id:uuid(),
      titulo: "Programación",
      colorPrimario:"#57c278",
      colorSecuendario:"#d9f7e9"
    },
   {
    id:uuid(),
    titulo: "Front-End",
    colorPrimario:"#82cffa",
    colorSecuendario:"#e8f8ff"
    },
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario:"#a6d157",
      colorSecuendario:"#f0f8e2"
    },
    {
      id:uuid(),
      titulo: "Dev Ops",
      colorPrimario:"#e06b69",
      colorSecuendario:"#fde7e8"
    },
    {
      id:uuid(),
      titulo: "Ux-Diseño",
      colorPrimario:"#db6ebf",
      colorSecuendario:"#fae9f5"
    },
    {
      id:uuid(),
      titulo: "Movíl",
      colorPrimario:"#ffba05",
      colorSecuendario:"#fff5d9"
    },
    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario:"#ff8a29",
      colorSecuendario:"#ffeedf"
    }
    
  ])

  console.log(uuid())

  //ternario  --> condición ? seMuestra: noSeMuestra
  const cambiarMostrar= () =>{
    actualizarMostrar(!mostrarFormulario)
    
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("nuevo colaborador", colaborador)
    //spread operator
    actualizarColaboradores([...Colaboradores, colaborador])

  }

  //eliminar colaborador
  const eliminarColaborador= (id) =>{
    console.log("eliminar el colaborador", id)
    const nuevosColaboradores = Colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor =(color,id) =>{
    console.log("actualizar ", color,id)
    const equiposActualizados =equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

    const  crearEquipo = (nuevoEquipo) =>{
      console.log(nuevoEquipo)
      actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid(

      )}])
    }

    const like = (id) =>{
      console.log("like", id)
      const colaboradoresActualizados = Colaboradores.map((colaborador) => {
        if(colaborador.id === id){
          colaborador.fav = !colaborador.fav
        }
        return colaborador
      })
      actualizarColaboradores(colaboradoresActualizados)
    }


//Lista de euqipos
  

  return (
    <div className="App">
      < Header />
      { /*mostrarFormulario ? <Formulario/> : <></>*/}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo)=> equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          /> 
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map( (equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        Colaboradores={Colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }

      <Footer />
      
    </div>
  );
}

export default App;
