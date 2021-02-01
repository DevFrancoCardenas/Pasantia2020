import React from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'

const Specialities = ({ specialities }) => {



  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "https://profuturo.education/wp-content/uploads/2019/11/peter_tabichi_1100x525c.jpg",
          alt: "Banner Especialidades"
        }}
        title="Nuestras especialidades"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnología"
      />


      <main className="ed-grid m-grid-3">
        <h1>Desarrollo frontend con React.js</h1>
        <h3>El camino para aprender React desde cero hasta crear tu primera aplicación real</h3>
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg" alt="clase" />

        
        <h1>Administración de Redes</h1>
        <h3>Las redes mantienen al mundo conectado y permiten desde comunicaciones pequeñas (LAN)</h3>        
        <img src="https://concepto.de/wp-content/uploads/2018/09/redes-informaticas-e1537289477478.jpg" alt="clase" ></img>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
})

export default connect(mapStateToProps)(Specialities)
