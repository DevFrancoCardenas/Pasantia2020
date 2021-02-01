import React, { useEffect} from 'react'
import store from '../../redux/store';
import { getSpeciality } from '../../redux/actionCreators';
import { connect } from "react-redux"
import Banner from '../Organisms/Banner'
import { Link } from "react-router-dom"

const Speciality = ({speciality}) => {

  useEffect(() => store.dispatch(getSpeciality(1)), [])

  return (
    <>
     {
       speciality &&
       <>
       <Banner
          color="dark-color"
          title={speciality.data.name}
          subtitle={speciality.data.subtitle}
          image={{
            src: "https://profuturo.education/wp-content/uploads/2019/11/peter_tabichi_1100x525c.jpg",
            alt: speciality.data.name
          }}
          courseBanner
          poster={speciality.data.picture}
          info={speciality.data.information}
        />
        <main className="ed-grid lg-grid-10">
          <div className="lg-cols-7">
            <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div>
                  <h3 className="t4">¿Qué aprenderás?</h3>
                  <ul>
                    { speciality.data.abilities.map(a =>(
                      <li key={a.id}>{a.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Cónocimientos previos</h3>
                  <ul>
                    { speciality.data.knowledge.map(a =>(
                      <li key={a.id}>{a.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Nivel</h3>
                  <p>{speciality.data.level}</p>
                </div>
              </div>
            <h2>Temario de la especialidad</h2>
            <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
              {
                speciality.data.courses.map(cl => (
                  <div className="course-class l-section" key={cl.id}>
                    <div className="ed-grid m-grid-3">
                      <Link to="/cursos/1"><img src={cl.picture} alt={cl.name}/></Link>
                      <div className="m-cols-2">
                        <h3>{cl.name}</h3>
                        <p>{cl.information}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </main>
       </>
     }
    </>
  )
}

const mapStateToProps = state => ({
  speciality: state.specialityReducer.speciality
})

export default connect(mapStateToProps, {})(Speciality)
