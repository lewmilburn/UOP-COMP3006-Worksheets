let students = [];
let lecturers = [];
let studentsExists = false;
let lecturersExists;

class student {
    name;
    email;
    idNumber;
}

class lecturer {
    name;
    email;
    office;
}

function createStudent() {
    let name = document.getElementById('studentName').value;
    let email = document.getElementById('studentEmail').value;
    let idNumber = document.getElementById('studentId').value;

    if (studentsExists) {
        students[students.length] = new student();
    } else {
        students[0] = new student();
        studentsExists = true;
    }

    let row = document.getElementById('studentTable').insertRow(students.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = idNumber;
}
function createLecturer() {
    let name = document.getElementById('lecturerName').value;
    let email = document.getElementById('lecturerEmail').value;
    let office = document.getElementById('office').value;

    if (lecturersExists) {
        lecturers[lecturers.length] = new lecturer();
    } else {
        lecturers[0] = new lecturer();
        lecturersExists = true;
    }

    let row = document.getElementById('lecturersTable').insertRow(lecturers.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = office;
}