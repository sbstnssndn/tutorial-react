import React from 'react';
import PropTypes from 'prop-types';
import CoursesList from './CoursesList';
import CourseAddForm from './CourseAddForm';
import { courses_list } from '../data/courses.json'
//tambien se puede importar asi:
//  import React, { Component } from 'react';
//  class App extends Component { }

class App extends React.Component {
    constructor(...props) {
        super(...props);

        this.state = {
            // El estado de la aplicacion tiene estos datos
            courses: []
        }
        // bindeo el this de la funcion al this de esta clase
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.resetData = this.resetData.bind(this);
    }
    // creo dos metodos nuevos y los bindeo tambien
    // setTimeout(callbackFunct, timeInMs) llama al callback despues de X ms
    fetchData() {
        setTimeout(
            () => this.setState( { courses: courses_list } ),
            2000
        )
    }
    // cambiar el estado de App, vaciando la lista de cursos
    resetData() {
        this.setState( { courses:[] } );
    }

    // evento alerta que sera usado por el form
    handleOnAddCourse(event) {
        //alert('Evento en React');
        // evitar que se procese el form
        event.preventDefault();
        // declaro variable de bloque que es el formulario
        let form = event.target;
        // declarar variable de bloque 'course' que sea igual a un objeto
        // que obtenga el parametro id del formulario, pero solo necesito el valor, no todo el elemento HTML
        let course = {
            id: form.id.value,
            // usar las defaultprops para darle un valor por defecto a los campos vacios (de dos formas diff)
            name:   (function() {
                        if(form.name.value) {return form.name.value} else {return App.defaultProps.name}
                    })(),
            teacher: (form.teacher.value) ? form.teacher.value : App.defaultProps.teacher
        };
        // actualizar el estado de la App.
        // modifico el objeto course (courses: this...blah)
        // le paso los valores agregados arriba (del formulario: id, name, teacher values)
        // y se los agrega al estado de App
        this.setState({
            courses: this.state.courses.concat([course])
        })
        // limpiar el form despues de agregar un valor
        form.reset();
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        if(!this.state.courses.length){
            return(
                <div>
                    <p>No hay cursos!</p>
                    <button onClick = {this.fetchData}>Cargar cursos</button>
                </div>
            )
        } else {
            return (
                // Renderizo el componente stateless CoursesList y le paso la prop courses
                // courses tiene como valor el elemento courses del estado de esta App
                // tambien le paso la prop onAddCourse, que es el evento handleOnAddCourse
                <div>
                    <h1>Hola React desde App</h1>
                    <CourseAddForm onAddCourse = {this.handleOnAddCourse} />
                    <CoursesList courses = {this.state.courses} />
                    <button onClick = {this.resetData}>Resetear cursos</button>
                </div>
            );
        }
    }
}

App.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired
};

App.defaultProps = {
    name: 'Curso desconocido',
    teacher: 'Profesor no asignado'
};

export default App;