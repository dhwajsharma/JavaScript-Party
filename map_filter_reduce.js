// eg: return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60.

let students = [{
    name: "Dhwaj",
    age: 21,
	 marks: 55
  },
  {
    name: "Ritish",
    age: 2,
	 marks: 70
  },
  {
    name: "Raghav",
    age: 11,
	 marks: 20
  },
]

const output = students.map((student) => {
  if (student.marks < 60) {
    student.marks += 20
  }

  return student;
}).filter((student) => student.marks > 60).reduce((acc, curr) => {
	return acc += curr.marks
}, 0)

console.log(output);
