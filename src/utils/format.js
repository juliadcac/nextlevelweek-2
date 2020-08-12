const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feria",
    "Quinta-feria",
    "Sexta-feira",
    "Sábado"
]

//funcionalidades 
function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1 
    return subjects[arrayPosition]
}

function convertHoursToMinutes(time) {
    const [hours, minutes] = time.split(':')
    return Number((hours + 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}