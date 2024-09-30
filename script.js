// Agregar funcionalidad al formulario para añadir cursos
document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar que la página se recargue

    // Obtener los valores de los inputs
    const courseName = document.getElementById('courseName').value;
    const courseDescription = document.getElementById('courseDescription').value;
    const courseDuration = document.getElementById('courseDuration').value;
    const courseInstructor = document.getElementById('courseInstructor').value;

    // Crear un nuevo elemento de curso para la lista
    const newCourse = document.createElement('li');
    newCourse.textContent = `${courseName} - ${courseDescription} - ${courseDuration} horas - Instructor: ${courseInstructor}`;

    // Agregar el nuevo curso a la lista en la página
    document.getElementById('courseList').appendChild(newCourse);

    // Limpiar el formulario después de agregar el curso
    document.getElementById('courseForm').reset();
});
