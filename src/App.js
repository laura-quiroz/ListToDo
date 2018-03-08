import React from 'react';
import {Form, Checkbox} from 'semantic-ui-react'
import './App.css';

const Tareitas = (props) =>  <div>{props.info.map((tarea) => (<div key={tarea.id}><Checkbox checked={tarea.completed} onChange={()=>props.onChangeHandler(tarea)}></Checkbox>{tarea.title_task}</div>))}</div>

console.log(Tareitas)
const App = props =>{
  return(
    <div className="todo">
    <Form className="todo2" onSubmit={()=>props.AgregarTarea(props.addForm.title_task)}>
      <h2>{props.titulo}</h2>
      <p>{props.subtitle}</p>
      <Form.Group width="equals">
        <Form.Input type="text" name="titulo" value={props.addForm.title_task} onChange={props.actualizarFormulario}/>
        <Form.Button>Agregar</Form.Button>
      </Form.Group>
    </Form>

    <div className="Tasks_list">
            <Tareitas
              info={props.tareas}
              onChangeHandler={props.cambiarCompletado}
            />

    </div>
    </div>
  )
}
export default App;
