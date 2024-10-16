const students = [
    {
        name: "Lucas",
        contestOne: 5.5,
        contestTwo: 7
    },
    {
        name: "Carla",
        contestOne: 6,
        contestTwo: 8
    },
    {
        name: "João",
        contestOne: 9,
        contestTwo: 4
    },
    {
        name: "Julia",
        contestOne: 8,
        contestTwo: 2
    }
];

function calculation(contestOne, contestTwo) {
    return (contestOne + contestTwo) / 2;
}

function showStudent(student) {
    const average = calculation(student.contestOne, student.contestTwo);
    return `A média do(a) aluno(a) ${student.name} é: ${average}`;
}

for (let student of students) {
    const value = calculation(student.contestOne, student.contestTwo);
    const studentResult = showStudent(student);
   
    if (value >= 7) {
        alert(`${studentResult}  \n Parabéns ${student.name}! Você foi aprovado(a) no concurso!`);
    } else {
        alert(`${studentResult}  \n Não foi dessa vez ${student.name}! Tente novamente!`);
    }
}


