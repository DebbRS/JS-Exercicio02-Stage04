let students = [
  {
    name: "Ana",
    gradeOne: 9,
    gradeTwo: 8,
  },

  {
    name: "Renato",
    gradeOne: 10,
    gradeTwo: 8,
  },

  {
    name: "Aline",
    gradeOne: 5,
    gradeTwo: 4,
  },
]


function average(students) {
  for (let student of students) {
    const calcAverage = ((student.gradeOne + student.gradeTwo) / 2).toFixed(2)
    if (calcAverage >= 7) {
      alert(`
  A média do(a) aluno(a) ${student.name} é: ${calcAverage}.
  Parabéns, ${student.name}! Você foi aprovado(a) no concurso!  `)
    } else {
      alert(`
      A média do(a) aluno(a) ${student.name} é: ${calcAverage}.
      Não foi dessa vez, ${student.name}! Tente novamente! `)
    }
  }}

average(students)