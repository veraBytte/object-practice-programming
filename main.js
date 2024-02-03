import {Student} from './classes/Student.js'
import { students } from './data/students.js'

const sectionHome = document.querySelector(".home")
const sectionStudent = document.querySelector(".student-panel")
const btnNav = document.querySelector(".btn-navigator")
const btnNewStudent = document.querySelector(".btn-crear-student")

const studentForm = document.querySelector(".student-form")
const inputFieldsStudentForm = studentForm.querySelectorAll("input")


window.dispelSection = () => {
    sectionHome.classList.add('animate');
    sectionStudent.classList.add('animate');
}

btnNav.addEventListener('click', () => {
    sectionHome.classList.remove('animate');
    sectionStudent.classList.remove('animate');
})

btnNewStudent.addEventListener('click', () => {
    try {
        const student = new Student({name: inputFieldsStudentForm[0].value, lastName: inputFieldsStudentForm[1].value, age: inputFieldsStudentForm[2].value, email: inputFieldsStudentForm[3].value})

        console.log(student);
        students.push(student);

    } catch (error) {
        console.error(`Hubo un error en el formulario: ${error}`);
    }
})