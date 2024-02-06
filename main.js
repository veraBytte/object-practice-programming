import { Student } from './classes/Student.js';
import { students } from './data/students.js';

// Selectores
const sectionHome = document.querySelector(".home");
const sectionStudent = document.querySelector(".student-panel");
const btnNav = document.querySelector(".btn-navigator");
const btnNewStudent = document.querySelector(".btn-crear-student");
const studentForm = document.querySelector(".student-form");
const inputFieldsStudentForm = studentForm.querySelectorAll("input");
const templateInfoStudent = document.querySelector("#student-template");
const studentInfo = document.querySelector(".student-info");

// Funciones
const dispelSection = () => {
    sectionHome.classList.add('animate');
    sectionStudent.classList.add('animate');
};

const handleNavClick = () => {
    sectionHome.classList.remove('animate');
    sectionStudent.classList.remove('animate');
};

const handleNewStudentClick = () => {
    const student = new Student({
        name: inputFieldsStudentForm[0].value,
        lastName: inputFieldsStudentForm[1].value,
        age: inputFieldsStudentForm[2].value,
        email: inputFieldsStudentForm[3].value
    });

    if (student) {
        studentForm.classList.add('fade-out');

        studentForm.addEventListener('transitionend', () => {
            const clone = templateInfoStudent.content.cloneNode(true);
            clone.querySelector('.student-name').textContent = student.name;
            clone.querySelector('.student-lastname').textContent = student.lastName;
            clone.querySelector('.student-age').textContent = student.age;
            clone.querySelector('.student-email').textContent = student.email;
            studentForm.replaceWith(clone);
        });
        students.push(student);
    }
};

const handleStudentInfoClick = (e) => {
    if (e.target.matches(".btn-guardar-student")) {
        const socialMediaInputs = document.querySelector(".social-media__inputs");
        const values = Array.from(socialMediaInputs.querySelectorAll("input"));

        values.forEach((element) => {
            if (element.value.trim() !== "") {
                console.log(values.indexOf(element));
            }
        });
    }
};

// Eventos
window.dispelSection = dispelSection;
btnNav.addEventListener('click', handleNavClick);
btnNewStudent.addEventListener('click', handleNewStudentClick);
studentInfo.addEventListener('click', handleStudentInfoClick);