import React from 'react'
import Banner from '../Organisms/Banner'
import { connect } from "react-redux"
import {Link} from 'react-router-dom'
const Courses = () => {


  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "https://profuturo.education/wp-content/uploads/2019/11/peter_tabichi_1100x525c.jpg",
          alt: "Banner Especialidades"
        }}
        title="Nuestros cursos"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnología"
      />
      
        <main className="ed-grid m-grid-2">
          
            <h1> <Link to={`/clase/4424`}>Estructura de Redes</Link></h1>
            <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s625b4ec751ae9489/image/i94cf68d1a7d68e53/version/1539681192/image.jpg" alt="clase" />
            <h1><Link to={`/clase/4424`}>Enrutamiento de Redes</Link></h1>
            <img src="https://www.redeszone.net/app/uploads-redeszone.net/2020/05/tablas-de-enrutamiento-portada.jpg" alt="clase"/>
            <h1><Link to={`/clase/4424`}>Conmutación de Redes</Link></h1>
            <img src="https://www.ecured.cu/images/7/7f/Conmutacion_de_red.jpg" alt="clase"/>
            <h1><Link to={`/clase/4424`}>Fundamentos de Redes</Link></h1>
            <img src="https://www.caracteristicas.co/wp-content/uploads/2018/10/redes-de-computadora-1-e1582281508636.jpg" alt="clase"/>
            <h1><Link to={`/clase/4424`}>Tu primer emprendimiento</Link></h1>  
            <img src="https://ronaldcreate.com/upload/noticias/2cbd66c07.jpg" alt="clase"/>
        </main>
      <main className="ed-grid m-grid-5">
      
      
     
    
      
    </main>
    <main className="ed-grid m-grid-5">
     
    </main>
      
    </>
  )
}

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Courses)
