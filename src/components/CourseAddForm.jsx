import React from 'react'

const CourseAddForm = (props) => (
    /* le paso al form la propiedad onAddCourse0, que ejecuta el evento handleOnaddCourse
    al momento de enviar el form (onSubmit) */
    <form onSubmit = {props.onAddCourse}>
        <input type="text" placeholder="Nombre del curso" name="name" />
        <input type="text" placeholder="Profesor" name="teacher" />
        {/* Genero ids random con Math.random */}
        <input type="hidden" name="id" value={Math.floor(Math.random()*100)} />
        <input type="submit" value="Guardar" />
    </form>
);

export default CourseAddForm;