import React from 'react';
import Course from './Course';

// Este componente es stateless, se declara como una arrow function
// le paso las propiedades del componente padre (courses es una propiedad de este componente).
//Ademas, puedo retornar el contenido sin usar return
const CoursesList = (props) => (
    <ul>
        {
            // itero sobre los cursos. La propiedad courses pertenece a CoursesList.
            props.courses.map(course => (
                // Le paso varias propiedads al componente Course. En el arbol de la aplicacion,
                // Course es nieto de App. Itero cada course dentro de la prop courses. 
                <Course 
                    // le asignamos una key al iterable para que React identifique cada elemento facilmente
                    key = {course.id}
                    id = {course.id}
                    name = {course.name}
                    teacher = {course.teacher}
                />
            ))
        }
    </ul>
)

export default CoursesList;