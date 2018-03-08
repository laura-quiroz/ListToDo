import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import tareas from './data'
import './index.css';
import App from './App.Container';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  titulo: 'Organiza aquí tus tareas',
  subtitle: 'Escribe aquí tus tareas:  ',
  addForm: {
    title_task: 'sfsf'
  },
  tareas: tareas //tareas es el titulo del estado del objeto de tareas que se define arriba en el import
}

//--INICIO DEL REDUCER
const miPrimerReducer_n_n = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        tareas: [...state.tareas, action.payload]
      }
    case 'TOGGLE_TASK':
      return {
        ...state,
        tareas: state.tareas.map(t => {
          if (t.title_task === action.payload.title_task) {
            return {
              ...t,
              completed: !action.payload.completed
            }
          } else {
            return t
          }
        })
      }
    case 'UPDATE_FORM':
      return {
        ...state,
        addForm: {
          title_task: action.payload
        }
      }
    default:
      return state
  }
}
//--FIN DEL REDUCER

const store = createStore(
  miPrimerReducer_n_n,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
