const data = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: '21',
        gpa: 3.5
    },
    {
        firstName: 'Mary',
        lastName: 'Smith',
        age: '22',
        gpa: 3.8
    },
    {
        firstName: 'Emily',
        lastName: 'Jones',
        age: '19',
        gpa: 3.2
    },
    {
        firstName: 'Michael',
        lastName: 'Johnson',
        age: '25',
        gpa: 2.8
    }
];

const displayStudentDirectory = () => {
    let element = document.getElementById("output");
    let order = document.getElementById("order").value;
    element.innerHTML = "";

    let sorted = data.sort((student1,student2) => {
        if (student1[order] > student2[order])
        return 1
    else if (student1[order] < student2[order])
        return -1
    else
        return 0;
    });

    sorted.forEach(student => {
        element.innerHTML += `<p><b>${student.lastName}, ${student.firstName}, (${student.age})</b>: ${student.gpa}</p>`
    })
};


document.getElementById("btnLoad").addEventListener('click',displayStudentDirectory);
