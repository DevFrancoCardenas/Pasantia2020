import React from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import ReactPlayer from 'react-player'

const Fragment = () => {
  return (
    <div className="class-page-container background dark-color s-pxy-4">
      <div className="ed-grid lg-grid-12">
        <div className="lg-cols-8 ">
          <div>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=awLJkNHBoms'
              className='react-player video-player'
              playing
              controls
              width="800px"
              height="550px"
            />
            <button className="button" ><Link to={`/clase/4424`}>Siguiente Clase</Link></button>
          </div>
          <div>
            <span className="color light-color"></span>
          </div>
        </div>
        <div className="lg-cols-4">
          <div>
            <h2 className="t3 color light-color"> Introduccion </h2>
            <div className="course-class l-section" >
              <h3 className="color light-color"> ¿Que son las topologias de red?</h3>
              <ul className="data-list">
                <li className="color light-color">Concepto</li>
                <li className="color light-color">Tipos de topologias</li>
                <li className="color light-color">Ejemplos de uso</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="t3 color light-color"> Practica </h2>
            <div className="course-class l-section" >
              <h3 className="color light-color"> ¿Que son las topologias de red?</h3>
              <ul className="data-list">
                <li className="color light-color">Clase 4</li>
                <li className="color light-color">Clase 5</li>
                <li className="color light-color">Clase 6</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="t3 color light-color"> Conceptos finales </h2>
            <div className="course-class l-section" >
              <h3 className="color light-color"> </h3>
              <ul className="data-list">
                <li className="color light-color">Clase 7</li>
                <li className="color light-color">Clase 8</li>
                <li className="color light-color">Evaluacion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  fragment: state.fragmentReducer.fragment,
  course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Fragment)
