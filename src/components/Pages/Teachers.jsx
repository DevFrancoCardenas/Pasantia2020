import React from 'react'
import Banner from '../Organisms/Banner';
import { connect } from "react-redux"


const Teachers = ({ match, teachers }) => {


  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "https://profuturo.education/wp-content/uploads/2019/11/peter_tabichi_1100x525c.jpg",
          alt: "Banner profesores"
        }}
        title="Nuestros profesores"
        subtitle="Este plantel docente está altamente calificado para guiarte en tu educación."
      />

      <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
        <img src="https://miprofevirtual.online/wp-content/uploads/2020/04/profesor-de-filosof%C3%ADa-2.jpg" alt="profesor" />
        <img src="https://ugelputina.edu.pe/site/wp-content/uploads/2018/09/salidas-profesionales-profesores-ele.jpeg" alt="profesor" />
        <img src="https://images.theconversation.com/files/355088/original/file-20200827-14-rw6uqq.jpg?ixlib=rb-1.1.0&rect=0%2C8%2C5751%2C3819&q=45&auto=format&w=496&fit=clip" alt="profesor" />
        <img src="https://ugelputina.edu.pe/site/wp-content/uploads/2018/09/salidas-profesionales-profesores-ele.jpeg" alt="profesor" />
      </main>
      <main className="ed-grid m-grid-3 lg-grid-4 row-gap center">
        <h3>Nombre del Profesor</h3>
        <h3>Nombre del Profesor</h3>
        <h3>Nombre del Profesor</h3>
        <h3>Nombre del Profesor</h3>
      </main>
      <main className="ed-grid m-grid-3 lg-grid-4 row-gap center">
        <h6>Pais</h6>
        <h6>Pais</h6>
        <h6>Pais</h6>
        <h6>Pais</h6>
      </main>

    </>
  )
}

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {})(Teachers)
