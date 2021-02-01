import React from 'react'
import Banner from '../Organisms/Banner'
import { connect } from "react-redux"
import Publicaciones1 from './Postss.jsx'
const Home = () => {

  return (
    <>
      <Banner
        color="dark-color"
        image="https://profuturo.education/wp-content/uploads/2019/11/peter_tabichi_1100x525c.jpg"
        title="Bienvenido a la expericia más increible en educación online. Comienza hoy mismo a aprender"
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estás buscando contenido de calidad. Aquí lo encontrás"
        home
        poster="https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png"
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones en el Foro</h2>
          
            <div>               
              <Publicaciones1/>
            </div> 
          
        </div>
        <div>
          <h3> Lista de categorías </h3>
          <ul className="data-list">
            <li><span>React.js</span></li>
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
          </ul>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
})

export default connect(mapStateToProps, {})(Home)
