// work for single object

// const student = {
//     id: 001,
//     dept: 'cse',
//     name:'anik',
// }

// const{dept,name} = student;

// console.log(dept,name);

// work for multiple object

const teacher = {
    name: 'anik',
    id:'147',
    salary: 50000,
    dept: {
        depertment:'cse',
        subject: 'object oriented'
    },
};

const{name, id} = teacher;
const {depertment} = teacher.dept;

console.log(name, id, depertment);