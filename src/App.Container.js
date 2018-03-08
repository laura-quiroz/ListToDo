import {connect} from 'react-redux'
import AppScene from './App'

const MapStateToProps = state => ({ //Crea el estado con el inicial de index.js
  titulo: state.titulo, //da el nombre de titulo al estado que tomara el valor de titulo que esta en index.js en el initial state
  subtitle: state.subtitle,
  tareas: state.tareas,
  addForm: state.addForm
})

const MapDispatchToProps = dispatch => ({
  AgregarTarea: (tarea) => { //toma el valor del input que se ingresa
    dispatch({
        type: 'ADD_TODO',
        payload: {
          title_task: tarea,
          completed: false
        }
      })
      dispatch({
      type: 'UPDATE_FORM',
      payload: ''
    })
  },
  actualizarFormulario: (e, tareaTitulo) =>
  dispatch({
    type: 'UPDATE_FORM',
    payload: tareaTitulo.value
  }),
  cambiarCompletado: tarea=>
  dispatch({
    type:'TOGGLE_TASK',
    payload: tarea
  })
})

//se exporta por defecto ... lleva como primer parametro el del estado y en un parentesis aparte se le pasa el componente de presentacion
export default connect(MapStateToProps, MapDispatchToProps)(AppScene)
